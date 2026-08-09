import { z } from "zod";
import candidatesSource from "../candidates.json";
import curriculumSource from "../curriculum.json";
import { configuredLlmProvider } from "@/lib/llm-provider";
import { buildInterviewerPrompt } from "@/lib/interview-prompt";

const missionSchema = z.object({ day: z.number().int().positive(), title: z.string().min(1), passed: z.boolean().optional(), skipped: z.boolean().optional(), attempts: z.number().int().positive().optional() });
export const candidateSchema = z.object({ member: z.object({ id: z.string().min(1), name: z.string().min(1), jobRole: z.string().min(1), yearsExperience: z.number().min(0), education: z.string().min(1), status: z.string().min(1) }), missions: z.array(missionSchema).min(1), signals: z.object({ commitDays: z.number().int().nonnegative(), missionsCompleted: z.number().int().nonnegative(), missionsFirstTry: z.number().int().nonnegative() }) });
const curriculumDaySchema = z.object({ day: z.number().int().positive(), title: z.string().min(1), type: z.string().min(1), tools: z.array(z.string()).min(1), objectives: z.array(z.string()).min(1) });
const curriculumSchema = z.object({ cohort: z.string(), modules: z.array(z.object({ n: z.number().int(), title: z.string(), days: z.array(z.number().int()).min(1) })).min(1), days: z.array(curriculumDaySchema).min(1) });
const canonicalCandidates = z.object({ candidates: z.array(candidateSchema).min(1) }).parse(candidatesSource).candidates;
const curriculum = curriculumSchema.parse(curriculumSource);
const candidatesById = new Map(canonicalCandidates.map((candidate) => [candidate.member.id, candidate]));
const daysByNumber = new Map(curriculum.days.map((day) => [day.day, day]));
const SESSION_LENGTH = 8;
export type Candidate = z.infer<typeof candidateSchema>;
type Mission = z.infer<typeof missionSchema>;
type Difficulty = "Easy" | "Medium" | "Hard";
type Evaluation = { score: number; strengths: string[]; gaps: string[]; reasoning: string };
type Session = { candidate: Candidate; messages: Array<{ role: "interviewer" | "candidate"; content: string }>; questionsAsked: Array<{ day: number; question: string; topic: string; difficulty: Difficulty }>; topicsCovered: string[]; difficulty: Difficulty; answerEvaluations: Evaluation[]; topicScores: Record<string, number[]>; plan: Mission[]; currentQuestion?: string; currentDay?: number };
export type InterviewFeedback = { summary: string; strengths: string[]; gaps: string[]; next: string[] };
export type InterviewReply = { reply: string; done: boolean; feedback?: InterviewFeedback; context?: { day: number; topic: string; difficulty: Difficulty; questionNumber: number } };
const sessions = new Map<string, Session>();
export type CompletedInterviewReport = { candidate: Candidate; feedback: InterviewFeedback; questionsAsked: Session["questionsAsked"]; messages: Session["messages"]; topicsCovered: string[]; difficultyProgression: Difficulty[]; answerEvaluations: Evaluation[]; topicScores: Record<string, number[]>; scores: { overall: number; technicalKnowledge: number; problemSolving: number; communication: number }; recommendedDays: Array<{ day: number; title: string; score: number }> };
const completedSessions = new Map<string, CompletedInterviewReport>();
const llm = configuredLlmProvider();

function moduleFor(day: number) { return curriculum.modules.find((entry) => entry.days[0] <= day && day <= entry.days[entry.days.length - 1])?.n; }
function status(mission: Mission): "completed" | "skipped" | "failed" { return mission.passed === false ? "failed" : mission.skipped ? "skipped" : "completed"; }
function planFor(candidate: Candidate) {
  const available = Array.from(new Map(candidate.missions.filter((mission) => daysByNumber.has(mission.day)).map((mission) => [mission.day, mission])).values()).sort((a, b) => a.day - b.day);
  const selected: Mission[] = []; const modules = new Set<number>();
  for (const mission of available) { const n = moduleFor(mission.day); if (n && !modules.has(n)) { selected.push(mission); modules.add(n); } if (modules.size === 4) break; }
  for (const mission of available) { if (!selected.some((item) => item.day === mission.day)) selected.push(mission); if (selected.length === SESSION_LENGTH) break; }
  if (selected.length < SESSION_LENGTH || new Set(selected.map((mission) => mission.day)).size < 4) throw new Error(`Candidate ${candidate.member.id} does not have enough curriculum history for this interview.`);
  return selected.slice(0, SESSION_LENGTH);
}
function fallbackEvaluation(answer?: string): Evaluation {
  const words = answer?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  const technicalSignals = /trade-?off|latency|evaluation|metric|test|retrieval|architecture|security|fallback|monitor/i.test(answer ?? "") ? 1 : 0;
  const score = !answer ? 3 : words >= 70 && technicalSignals ? 5 : words >= 35 ? 4 : words >= 15 ? 3 : 2;
  return { score, strengths: score >= 4 ? ["Explained a concrete technical approach."] : ["Provided a starting direction."], gaps: score <= 2 ? ["Add implementation detail, trade-offs, and a concrete example."] : ["Make success metrics explicit."], reasoning: "Deterministic fallback evaluation based on answer specificity." };
}
function nextDifficulty(evaluation?: Evaluation): Difficulty { if (!evaluation) return "Medium"; if (evaluation.score >= 4) return "Hard"; if (evaluation.score <= 2) return "Easy"; return "Medium"; }
function eligible(session: Session) { return session.plan.filter((mission) => !session.topicsCovered.includes(daysByNumber.get(mission.day)!.title)); }
function fallbackQuestion(session: Session, mission: Mission, difficulty: Difficulty) {
  const day = daysByNumber.get(mission.day)!; const objective = day.objectives[session.questionsAsked.length % day.objectives.length];
  const lead = difficulty === "Hard" ? "Go beyond the happy path: describe the implementation trade-offs and failure modes." : difficulty === "Easy" ? "Start with the core idea, then explain one practical step." : "Explain the design choices you would make and how you would validate them.";
  const history = status(mission) === "skipped" ? "You skipped this mission, so reason from first principles." : status(mission) === "failed" ? "This was a difficult area in the cohort, so focus on how you would approach it differently." : `You completed this mission${mission.attempts ? ` in ${mission.attempts} attempt${mission.attempts === 1 ? "" : "s"}` : ""}.`;
  return `${history} For ${day.title}, the objective is to ${objective.charAt(0).toLowerCase()}${objective.slice(1)}. ${lead}`;
}
async function askNext(session: Session, priorAnswer?: string): Promise<InterviewReply> {
  const options = eligible(session); const fallbackMission = options[0] ?? session.plan.find((mission) => !session.questionsAsked.some((question) => question.day === mission.day));
  if (!fallbackMission) throw new Error("No eligible curriculum topics remain for this session.");
  const priorEvaluation = priorAnswer ? fallbackEvaluation(priorAnswer) : undefined;
  const desiredDifficulty = nextDifficulty(priorEvaluation);
  const optionData = options.map((mission) => { const day = daysByNumber.get(mission.day)!; return { day: day.day, title: day.title, objectives: day.objectives, missionStatus: status(mission), attempts: mission.attempts }; });
  const decision = await llm?.generateInterviewDecision(buildInterviewerPrompt({ candidate: session.candidate, questionNumber: session.questionsAsked.length + 1, priorAnswer, priorQuestion: session.currentQuestion, topicsCovered: session.topicsCovered, difficulty: desiredDifficulty, eligibleTopics: optionData })) ?? null;
  const validDecision = decision && options.some((mission) => mission.day === decision.day) ? decision : null;
  const mission = validDecision ? options.find((item) => item.day === validDecision.day)! : fallbackMission;
  const day = daysByNumber.get(mission.day)!;
  const evaluation = validDecision?.evaluation ?? priorEvaluation;
  if (priorAnswer && evaluation) { session.answerEvaluations.push(evaluation); (session.topicScores[session.currentDay ? daysByNumber.get(session.currentDay)!.title : day.title] ??= []).push(evaluation.score); }
  const difficulty = validDecision?.difficulty ?? desiredDifficulty;
  const question = validDecision?.question ?? fallbackQuestion(session, mission, difficulty);
  session.difficulty = difficulty; session.currentDay = day.day; session.currentQuestion = question; session.topicsCovered.push(day.title); session.questionsAsked.push({ day: day.day, question, topic: day.title, difficulty }); session.messages.push({ role: "interviewer", content: question });
  return { reply: question, done: false, context: { day: day.day, topic: day.title, difficulty, questionNumber: session.questionsAsked.length } };
}
function feedback(session: Session): InterviewFeedback {
  const avg = session.answerEvaluations.length ? session.answerEvaluations.reduce((sum, item) => sum + item.score, 0) / session.answerEvaluations.length : 0;
  const gaps = session.answerEvaluations.flatMap((item) => item.gaps).slice(0, 2); const strengths = session.answerEvaluations.flatMap((item) => item.strengths).slice(0, 2);
  return { summary: `${session.candidate.member.name} completed ${session.questionsAsked.length} adaptive questions across ${new Set(session.questionsAsked.map((item) => item.day)).size} curriculum days.`, strengths: strengths.length ? strengths : ["Completed a full technical conversation."], gaps: gaps.length ? gaps : ["Continue making implementation trade-offs explicit."], next: [`Revisit the lowest-scoring topic from ${session.topicsCovered.join(", ")}.`, `Practice explaining architecture decisions in terms of measurable outcomes. ${avg >= 4 ? "Push further into failure modes and scale." : "Start with one concrete example per answer."}`] };
}
function completedReport(session: Session, finalFeedback: InterviewFeedback): CompletedInterviewReport {
  const average = session.answerEvaluations.reduce((sum, evaluation) => sum + evaluation.score, 0) / Math.max(session.answerEvaluations.length, 1);
  const overall = Math.round(average * 20);
  const questionLengths = session.messages.filter((message) => message.role === "candidate").map((message) => message.content.trim().split(/\s+/).filter(Boolean).length);
  const communication = Math.min(100, Math.round((questionLengths.reduce((sum, length) => sum + Math.min(length, 80), 0) / Math.max(questionLengths.length, 1)) * 1.25));
  const technicalKnowledge = overall;
  const problemSolving = Math.round((overall * 0.7) + (session.answerEvaluations.filter((evaluation) => evaluation.score >= 4).length / Math.max(session.answerEvaluations.length, 1)) * 30);
  const scoredTopics = Object.entries(session.topicScores).map(([topic, scores]) => ({ topic, score: Math.round((scores.reduce((sum, score) => sum + score, 0) / scores.length) * 20) }));
  const recommendedDays = session.plan.map((mission) => { const day = daysByNumber.get(mission.day)!; const topicScore = scoredTopics.find((topic) => topic.topic === day.title)?.score ?? (status(mission) === "completed" ? 65 : 40); return { day: day.day, title: day.title, score: topicScore }; }).sort((a, b) => a.score - b.score).slice(0, 3);
  return { candidate: session.candidate, feedback: finalFeedback, questionsAsked: session.questionsAsked, messages: session.messages, topicsCovered: session.topicsCovered, difficultyProgression: session.questionsAsked.map((question) => question.difficulty), answerEvaluations: session.answerEvaluations, topicScores: session.topicScores, scores: { overall, technicalKnowledge, problemSolving, communication }, recommendedDays };
}
export function getCompletedReport(sessionId: string) { return completedSessions.get(sessionId); }
export async function startInterview(sessionId: string, received: Candidate): Promise<InterviewReply> { const candidate = candidatesById.get(received.member.id); if (!candidate) throw new Error("Candidate was not found in the supplied candidate data."); const session: Session = { candidate, messages: [], questionsAsked: [], topicsCovered: [], difficulty: "Medium", answerEvaluations: [], topicScores: {}, plan: planFor(candidate) }; sessions.set(sessionId, session); return askNext(session); }
export async function continueInterview(sessionId: string, message: string): Promise<InterviewReply> { const session = sessions.get(sessionId); if (!session) throw new Error("Interview session was not found. Start a new interview with a candidate."); session.messages.push({ role: "candidate", content: message }); if (session.questionsAsked.length >= SESSION_LENGTH) { const evaluation = fallbackEvaluation(message); session.answerEvaluations.push(evaluation); const lastTopic = session.questionsAsked[session.questionsAsked.length - 1]?.topic; if (lastTopic) (session.topicScores[lastTopic] ??= []).push(evaluation.score); const finalFeedback = feedback(session); completedSessions.set(sessionId, completedReport(session, finalFeedback)); sessions.delete(sessionId); return { reply: "Interview completed.", done: true, feedback: finalFeedback }; } return askNext(session, message); }
