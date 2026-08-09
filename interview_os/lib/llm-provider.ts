import { z } from "zod";

export const interviewerDecisionSchema = z.object({
  day: z.number().int().positive(),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  question: z.string().trim().min(12).max(900),
  evaluation: z.object({
    score: z.number().int().min(1).max(5),
    strengths: z.array(z.string().min(1)).max(4),
    gaps: z.array(z.string().min(1)).max(4),
    reasoning: z.string().min(1).max(600),
  }),
});
export type InterviewerDecision = z.infer<typeof interviewerDecisionSchema>;

export interface LlmProvider { generateInterviewDecision(prompt: string): Promise<InterviewerDecision | null>; }

function responseText(body: unknown): string | null {
  if (!body || typeof body !== "object") return null;
  const data = body as { output_text?: unknown; output?: Array<{ content?: Array<{ text?: unknown }> }> };
  if (typeof data.output_text === "string") return data.output_text;
  return data.output?.flatMap((item) => item.content ?? []).map((item) => typeof item.text === "string" ? item.text : "").join("") || null;
}

class OpenAiCompatibleProvider implements LlmProvider {
  constructor(private readonly apiKey: string, private readonly baseUrl: string, private readonly model: string) {}
  async generateInterviewDecision(prompt: string) {
    try {
      const response = await fetch(`${this.baseUrl.replace(/\/$/, "")}/responses`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.apiKey}` },
        signal: AbortSignal.timeout(10_000),
        body: JSON.stringify({ model: this.model, input: prompt, text: { format: { type: "json_object" } }, temperature: 0.35 }),
      });
      if (!response.ok) return null;
      const text = responseText(await response.json());
      if (!text) return null;
      return interviewerDecisionSchema.safeParse(JSON.parse(text)).data ?? null;
    } catch { return null; }
  }
}

export function configuredLlmProvider(): LlmProvider | null {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  return new OpenAiCompatibleProvider(apiKey, process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1", process.env.OPENAI_MODEL ?? "gpt-4.1-mini");
}
