import { NextResponse } from "next/server";
import { z } from "zod";

import { candidateSchema, continueInterview, getCompletedReport, startInterview } from "@/lib/interview-service";

const requestSchema = z.object({
  sessionId: z.string().min(1).max(128),
  candidate: candidateSchema.optional(),
  message: z.string().trim().min(1).max(12000).optional(),
}).superRefine((body, ctx) => {
  if (!body.candidate && !body.message) ctx.addIssue({ code: "custom", message: "Provide a candidate to start or a message to continue the interview." });
  if (body.candidate && body.message) ctx.addIssue({ code: "custom", message: "Provide either candidate or message, not both." });
});

export async function POST(request: Request) {
  try {
    const body = requestSchema.parse(await request.json());
    const result = body.candidate ? await startInterview(body.sessionId, body.candidate) : await continueInterview(body.sessionId, body.message!);
    const response = NextResponse.json(result);
    if (result.done) {
      const report = getCompletedReport(body.sessionId);
      if (report) response.headers.set("X-Interview-Report", Buffer.from(JSON.stringify(report)).toString("base64"));
    }
    return response;
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: "Invalid interview request.", details: error.issues }, { status: 400 });
    const message = error instanceof Error ? error.message : "Unable to process the interview request.";
    const status = message.includes("not found") ? 404 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
