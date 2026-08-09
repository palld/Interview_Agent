"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Bot, BrainCircuit, CheckCircle2, ChevronDown, Clock3, Layers3, LoaderCircle, Send, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Candidate = { member: { id: string; name: string; jobRole: string; yearsExperience: number; education: string; status: string }; missions: Array<{ day: number; title: string; passed?: boolean; skipped?: boolean; attempts?: number }>; signals: { commitDays: number; missionsCompleted: number; missionsFirstTry: number } };
type Context = { day: number; topic: string; difficulty: string; questionNumber: number };
type ApiResponse = { reply: string; done: boolean; context?: Context; feedback?: { summary: string; strengths: string[]; gaps: string[]; next: string[] } };
type SavedInterview = { sessionId: string; candidateId: string; question: string; context: Context; seconds: number };
const EASE = [0.16, 1, 0.3, 1] as const;

function readSavedInterview(): SavedInterview | null {
  if (typeof window === "undefined") return null;
  try { return JSON.parse(sessionStorage.getItem("interviewos.activeInterview") ?? "null") as SavedInterview | null; } catch { return null; }
}
function friendlyApiMessage(status: number, starting = false) {
  if (status === 404) return starting ? "This candidate is no longer available. Return to the dashboard and choose another candidate." : "This interview session has expired. Start a fresh session from the dashboard.";
  return starting ? "We couldn't start the interview. Please try again." : "We couldn't submit that answer. Please try again.";
}

function formatTime(value: number) { return `${String(Math.floor(value / 60)).padStart(2, "0")}:${String(value % 60).padStart(2, "0")}`; }

function CandidateIdentity({ candidate }: { candidate: Candidate | null }) {
  const name = candidate?.member.name ?? "Selected candidate";
  const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2);
  return <div className="flex min-w-0 items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-signal to-pulse text-[11px] font-semibold text-ink">{initials}</span><div className="min-w-0"><p className="truncate text-sm font-semibold">{name}</p><p className="truncate text-xs text-text-muted">{candidate?.member.jobRole ?? "Technical candidate"}</p></div></div>;
}

function AnalysisPanel({ context, onEnd }: { context: Context | null; onEnd: () => void }) {
  const topics = [context?.topic ?? "Preparing curriculum", "Objective-led discussion"];
  return <div className="space-y-5"><div className="flex items-center justify-between"><div><p className="text-sm font-semibold">Interview analysis</p><p className="mt-1 text-xs text-text-muted">Live session context</p></div><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-signal/10 text-signal"><BrainCircuit className="h-4 w-4" /></span></div><div className="space-y-3 rounded-lg border border-line/10 bg-surface-raised/35 p-3"><p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-faint">Topics assessed</p><div className="flex flex-wrap gap-1.5">{topics.map((topic) => <Badge key={topic} variant="outline" className="text-[10px]">{topic}</Badge>)}</div></div><div className="space-y-3 rounded-lg border border-line/10 bg-surface-raised/35 p-3"><p className="text-[10px] font-medium uppercase tracking-[0.14em] text-text-faint">Skills being evaluated</p><div className="space-y-2">{["Technical reasoning", "Applied judgment"].map((skill) => <div key={skill} className="flex items-center gap-2 text-xs text-text-muted"><span className="h-1.5 w-1.5 rounded-full bg-pulse" />{skill}</div>)}</div></div><div className="grid grid-cols-2 gap-3"><div className="rounded-lg border border-line/10 bg-surface-raised/35 p-3"><p className="text-[10px] uppercase tracking-[0.12em] text-text-faint">Completed</p><p className="mt-1 text-xl font-semibold">{Math.max((context?.questionNumber ?? 1) - 1, 0)}<span className="text-xs font-medium text-text-faint">/8</span></p></div><div className="rounded-lg border border-line/10 bg-surface-raised/35 p-3"><p className="text-[10px] uppercase tracking-[0.12em] text-text-faint">Difficulty</p><p className="mt-1 text-sm font-semibold text-pulse">{context?.difficulty ?? "Preparing"}</p></div></div><div className="flex items-center justify-between border-t border-line/10 pt-4"><span className="flex items-center gap-2 text-xs text-text-muted"><span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_hsl(var(--mint)/0.6)]" />Session in progress</span><button onClick={onEnd} className="text-xs font-medium text-danger hover:opacity-80">End interview</button></div></div>;
}

export default function InterviewPage() {
  const router = useRouter();
const [candidate, setCandidate] = useState<Candidate | null>(null);

useEffect(() => {
  const value = localStorage.getItem("interviewos.selectedCandidate");

  if (value) {
    try {
      setCandidate(JSON.parse(value) as Candidate);
    } catch {
      setCandidate(null);
    }
  }
}, []);
  const [savedInterview] = useState(readSavedInterview);
  const restored = savedInterview?.candidateId === candidate?.member.id ? savedInterview : null;
  const [sessionId] = useState(() => restored?.sessionId ?? (typeof window === "undefined" ? "" : window.crypto.randomUUID()));
  const [question, setQuestion] = useState(() => restored?.question ?? "");
  const [context, setContext] = useState<Context | null>(() => restored?.context ?? null);
  const [answer, setAnswer] = useState("");
  const [starting, setStarting] = useState(Boolean(candidate && !restored));
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [seconds, setSeconds] = useState(() => restored?.seconds ?? 0);
  const [analysisOpen, setAnalysisOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);
  const [ended, setEnded] = useState(false);
  const questionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!candidate || !sessionId || restored) return;
    const controller = new AbortController();
    void fetch("/api/interview", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sessionId, candidate }), signal: controller.signal })
      .then(async (response) => { const body = await response.json() as ApiResponse; if (!response.ok) throw new Error(String(response.status)); return body; })
      .then((body) => { if (!controller.signal.aborted) { setQuestion(body.reply); setContext(body.context ?? null); } })
      .catch((reason: unknown) => { if (!controller.signal.aborted) setError(friendlyApiMessage(Number(reason instanceof Error ? reason.message : 0), true)); })
      .finally(() => { if (!controller.signal.aborted) setStarting(false); });
    return () => controller.abort();
  }, [candidate, restored, sessionId]);

  useEffect(() => {
    if (candidate && question && context && sessionId) sessionStorage.setItem("interviewos.activeInterview", JSON.stringify({ sessionId, candidateId: candidate.member.id, question, context, seconds }));
  }, [candidate, context, question, seconds, sessionId]);

  useEffect(() => { if (ended) return; const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000); return () => window.clearInterval(timer); }, [ended]);
  useEffect(() => { questionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }, [context?.questionNumber]);

  const submit = async () => {
    if (!answer.trim()) { setError("Write a response before submitting it."); return; }
    if (!candidate || !sessionId) { setError("Select a candidate from the dashboard before starting an interview."); return; }
    setError(""); setProcessing(true);
    try {
      const response = await fetch("/api/interview", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sessionId, message: answer.trim() }) });
      const body = await response.json() as ApiResponse;
      if (!response.ok) throw new Error(String(response.status));
      setAnswer("");
      if (body.done) {
        const report = response.headers.get("X-Interview-Report");
        if (report) localStorage.setItem("interviewos.latestReport", atob(report));
        else localStorage.setItem("interviewos.latestReport", JSON.stringify({ candidate, feedback: body.feedback, questionsAsked: [], messages: [], difficultyProgression: [], answerEvaluations: [], topicScores: {}, scores: { overall: 0, technicalKnowledge: 0, problemSolving: 0, communication: 0 }, recommendedDays: [] }));
        sessionStorage.removeItem("interviewos.activeInterview"); setEnded(true);
        router.push("/report");
      } else { setQuestion(body.reply); setContext(body.context ?? null); }
    } catch (reason) { const status = Number(reason instanceof Error ? reason.message : 0); if (status === 404) sessionStorage.removeItem("interviewos.activeInterview"); setError(friendlyApiMessage(status)); } finally { setProcessing(false); }
  };
  const keyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => { if ((event.ctrlKey || event.metaKey) && event.key === "Enter") { event.preventDefault(); if (!processing) void submit(); } };

  if (ended) return <div className="glass mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center rounded-2xl px-6 text-center"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint/10 text-mint"><CheckCircle2 className="h-6 w-6" /></span><h1 className="mt-5 text-2xl font-semibold tracking-tight">Interview session complete</h1><p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">The session is complete. Structured feedback has been recorded for the future report experience.</p></div>;

  const questionNumber = context?.questionNumber ?? 1;
  return <div className="mx-auto max-w-7xl space-y-5"><header className="glass rounded-xl p-4 sm:p-5"><div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><CandidateIdentity candidate={candidate} /><div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs"><span className="flex items-center gap-2 text-text-muted"><Clock3 className="h-3.5 w-3.5 text-pulse" /><span className="font-mono text-text-primary">{formatTime(seconds)}</span></span><Badge variant="outline">Day {context?.day ?? "—"} · {context?.topic ?? "Preparing session"}</Badge><Badge variant="signal">{context?.difficulty ?? "Preparing"}</Badge></div></div><div className="mt-4 flex items-center gap-3"><span className="font-mono text-[11px] text-text-faint">QUESTION {questionNumber} / 8</span><Progress value={(questionNumber / 8) * 100} className="flex-1" /></div></header><div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_330px]"><main className="min-w-0 space-y-4"><div ref={questionRef} /><AnimatePresence mode="wait"><motion.section key={questionNumber} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: EASE }} className="glass overflow-hidden rounded-xl"><div className="flex items-center justify-between border-b border-line/10 px-5 py-4"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-signal/20 to-pulse/15 text-signal"><Bot className="h-4 w-4" /></span><div><p className="text-sm font-semibold">InterviewOS</p><p className="text-[11px] text-text-muted">Technical interviewer</p></div></div><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-faint">Curriculum day {context?.day ?? "—"}</span></div><div className="p-5 sm:p-7">{starting ? <div className="flex min-h-32 items-center gap-3 text-sm text-text-muted"><LoaderCircle className="h-4 w-4 animate-spin text-signal" />Preparing a personalized question...</div> : <><p className="max-w-3xl whitespace-pre-line text-pretty text-lg font-medium leading-relaxed text-text-primary sm:text-xl">{question || "Select a candidate from the dashboard to begin."}</p><div className="mt-7 flex flex-wrap gap-2">{["Objective-led", "Technical reasoning"].map((skill) => <span key={skill} className="rounded-full border border-line/10 bg-surface-raised/50 px-2.5 py-1 text-[11px] text-text-muted">{skill}</span>)}</div></>}</div></motion.section></AnimatePresence><section className="lg:hidden"><button onClick={() => setAnalysisOpen((open) => !open)} aria-expanded={analysisOpen} className="glass flex w-full items-center justify-between rounded-xl px-4 py-3 text-left"><span className="flex items-center gap-2 text-sm font-medium"><Layers3 className="h-4 w-4 text-signal" />Interview analysis</span><ChevronDown className={`h-4 w-4 text-text-muted transition-transform ${analysisOpen ? "rotate-180" : ""}`} /></button><AnimatePresence>{analysisOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="glass mt-2 rounded-xl p-4"><AnalysisPanel context={context} onEnd={() => setEndOpen(true)} /></div></motion.div>}</AnimatePresence></section><section className="rounded-xl border border-line/10 bg-surface/70 p-4 sm:p-5"><div className="flex items-center justify-between"><p className="text-sm font-semibold">Your response</p><span className="text-[11px] text-text-faint">Ctrl / ⌘ + Enter to submit</span></div><Textarea value={answer} onChange={(event) => { setAnswer(event.target.value); if (error) setError(""); }} onKeyDown={keyDown} disabled={starting || processing || !candidate} placeholder="Organize your thinking, explain your trade-offs, and give a concrete example..." className="mt-4 min-h-44 resize-y border-line/10 bg-ink/30 text-sm leading-relaxed placeholder:text-text-faint focus-visible:ring-signal/25 sm:min-h-52" /><div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div>{error ? <p role="alert" className="flex items-center gap-1.5 text-xs text-danger"><AlertCircle className="h-3.5 w-3.5" />{error}</p> : <p className="text-xs text-text-faint">{candidate ? "Be concise, but make your reasoning visible." : "Select a candidate from the dashboard to begin."}</p>}</div><div className="flex items-center justify-between gap-3 sm:justify-end"><span className="font-mono text-[11px] text-text-faint">{answer.length.toLocaleString()} characters</span><Button onClick={() => void submit()} disabled={starting || processing || !candidate} className="min-w-36">{processing ? <><LoaderCircle className="animate-spin" />AI is analyzing...</> : <>Submit Answer <Send /></>}</Button></div></div></section></main><aside className="glass hidden h-fit rounded-xl p-5 lg:block"><AnalysisPanel context={context} onEnd={() => setEndOpen(true)} /></aside></div><Dialog open={endOpen} onOpenChange={setEndOpen}><DialogContent><DialogHeader><DialogTitle>End this interview?</DialogTitle><DialogDescription>Your current session progress will remain in the service until it expires.</DialogDescription></DialogHeader><DialogFooter><Button variant="secondary" onClick={() => setEndOpen(false)}>Continue interview</Button><Button variant="destructive" onClick={() => { setEndOpen(false); setEnded(true); }}><Square />End interview</Button></DialogFooter></DialogContent></Dialog></div>;
}
