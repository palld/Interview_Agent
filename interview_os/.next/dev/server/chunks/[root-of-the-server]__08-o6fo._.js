module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/interview-os/app/api/interview/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$interview$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/lib/interview-service.ts [app-route] (ecmascript)");
;
;
;
const requestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(128),
    candidate: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$interview$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["candidateSchema"].optional(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(12000).optional()
}).superRefine((body, ctx)=>{
    if (!body.candidate && !body.message) ctx.addIssue({
        code: "custom",
        message: "Provide a candidate to start or a message to continue the interview."
    });
    if (body.candidate && body.message) ctx.addIssue({
        code: "custom",
        message: "Provide either candidate or message, not both."
    });
});
async function POST(request) {
    try {
        const body = requestSchema.parse(await request.json());
        const result = body.candidate ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$interview$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startInterview"])(body.sessionId, body.candidate) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$interview$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["continueInterview"])(body.sessionId, body.message);
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
        if (result.done) {
            const report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$interview$2d$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCompletedReport"])(body.sessionId);
            if (report) response.headers.set("X-Interview-Report", Buffer.from(JSON.stringify(report)).toString("base64"));
        }
        return response;
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodError) return __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid interview request.",
            details: error.issues
        }, {
            status: 400
        });
        const message = error instanceof Error ? error.message : "Unable to process the interview request.";
        const status = message.includes("not found") ? 404 : 500;
        return __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status
        });
    }
}
}),
"[project]/interview-os/candidates.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"candidates\":[{\"member\":{\"id\":\"CAND-001\",\"name\":\"Sarah Johnson\",\"jobRole\":\"Senior Data Engineer\",\"yearsExperience\":9,\"education\":\"MS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":2},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":4},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":2},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":2},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":3},{\"day\":29,\"title\":\"Monitoring, Logging & Observability\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":28,\"missionsCompleted\":30,\"missionsFirstTry\":20}},{\"member\":{\"id\":\"CAND-002\",\"name\":\"Alex Turner\",\"jobRole\":\"Backend Software Engineer\",\"yearsExperience\":5,\"education\":\"B.Tech Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":3},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":2},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":4},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":5},{\"day\":13,\"title\":\"Function Calling & Structured Outputs\",\"passed\":true,\"attempts\":4},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":18,\"title\":\"Streaming Responses\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":3},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":22,\"missionsCompleted\":29,\"missionsFirstTry\":10}},{\"member\":{\"id\":\"CAND-003\",\"name\":\"Emily Chen\",\"jobRole\":\"AI Engineer\",\"yearsExperience\":6,\"education\":\"MS Artificial Intelligence\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":1},{\"day\":11,\"title\":\"RAG End-to-End & LLM API Basics\",\"passed\":true,\"attempts\":1},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":13,\"title\":\"Function Calling & Structured Outputs\",\"passed\":true,\"attempts\":1},{\"day\":21,\"title\":\"LangChain Agents\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":31,\"missionsCompleted\":31,\"missionsFirstTry\":30}},{\"member\":{\"id\":\"CAND-004\",\"name\":\"David Miller\",\"jobRole\":\"Business Analyst\",\"yearsExperience\":8,\"education\":\"MBA\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":4},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":5},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":5},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":3},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":2},{\"day\":20,\"title\":\"Conversation Memory & Context Management\",\"passed\":true,\"attempts\":3},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":4},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":5},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":18,\"missionsCompleted\":28,\"missionsFirstTry\":6}},{\"member\":{\"id\":\"CAND-005\",\"name\":\"Michael Brown\",\"jobRole\":\"DevOps Engineer\",\"yearsExperience\":10,\"education\":\"B.Tech Information Technology\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":2},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":2},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":2},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":4},{\"day\":18,\"title\":\"Streaming Responses\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":2},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":3},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":29,\"title\":\"Monitoring, Logging & Observability\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":30,\"missionsCompleted\":31,\"missionsFirstTry\":22}},{\"member\":{\"id\":\"CAND-006\",\"name\":\"Wendy Foster\",\"jobRole\":\"Marketing Manager\",\"yearsExperience\":12,\"education\":\"BA Marketing\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":3},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":5},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":5},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":4},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":4},{\"day\":17,\"title\":\"Chatbot Frontend Development\",\"passed\":true,\"attempts\":2},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":5},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":3}],\"signals\":{\"commitDays\":19,\"missionsCompleted\":24,\"missionsFirstTry\":2}},{\"member\":{\"id\":\"CAND-007\",\"name\":\"Ethan Brooks\",\"jobRole\":\"Computer Science Intern\",\"yearsExperience\":0,\"education\":\"BS Computer Science (in progress)\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":1},{\"day\":3,\"title\":\"First AI Project, React Frontend & GitHub\",\"passed\":true,\"attempts\":1},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":2},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":26,\"missionsCompleted\":27,\"missionsFirstTry\":22}},{\"member\":{\"id\":\"CAND-008\",\"name\":\"Harold Whitfield\",\"jobRole\":\"Distinguished Engineer\",\"yearsExperience\":28,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":1},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"passed\":true,\"attempts\":1},{\"day\":5,\"title\":\"Reading & Processing Unstructured Data\",\"passed\":true,\"attempts\":1},{\"day\":14,\"title\":\"Fine-Tuning: Concepts & When to Use It\",\"skipped\":true},{\"day\":15,\"title\":\"Fine-Tuning: Hands-On with LoRA & QLoRA\",\"skipped\":true},{\"day\":21,\"title\":\"LangChain Agents\",\"passed\":true,\"attempts\":5},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":4},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":5},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":25,\"missionsCompleted\":27,\"missionsFirstTry\":15}},{\"member\":{\"id\":\"CAND-009\",\"name\":\"Zara Ahmadi\",\"jobRole\":\"AI Engineer\",\"yearsExperience\":1,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":1},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":13,\"title\":\"Function Calling & Structured Outputs\",\"passed\":true,\"attempts\":1},{\"day\":21,\"title\":\"LangChain Agents\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":31,\"missionsCompleted\":31,\"missionsFirstTry\":29}},{\"member\":{\"id\":\"CAND-010\",\"name\":\"Gerald Combs\",\"jobRole\":\"IT Support Specialist\",\"yearsExperience\":20,\"education\":\"AAS Information Technology\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":2},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":5},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":false,\"attempts\":4},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":false,\"attempts\":3},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":5},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":4},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":false,\"attempts\":3},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":3}],\"signals\":{\"commitDays\":22,\"missionsCompleted\":23,\"missionsFirstTry\":1}},{\"member\":{\"id\":\"CAND-011\",\"name\":\"Mia Alvarez\",\"jobRole\":\"UX Researcher\",\"yearsExperience\":6,\"education\":\"MA Human-Computer Interaction\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":2},{\"day\":2,\"title\":\"Local LLM & AI Coding Assistant Setup\",\"passed\":true,\"attempts\":1},{\"day\":3,\"title\":\"First AI Project, React Frontend & GitHub\",\"passed\":true,\"attempts\":3},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"passed\":true,\"attempts\":2},{\"day\":7,\"title\":\"Embeddings Explained\",\"skipped\":true},{\"day\":8,\"title\":\"Vector Databases Overview\",\"skipped\":true},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"skipped\":true},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"skipped\":true},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":4}],\"signals\":{\"commitDays\":9,\"missionsCompleted\":14,\"missionsFirstTry\":5}},{\"member\":{\"id\":\"CAND-012\",\"name\":\"Chen Wei\",\"jobRole\":\"Mobile App Developer\",\"yearsExperience\":7,\"education\":\"BS Computer Engineering\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":4},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":5},{\"day\":9,\"title\":\"Building & Populating the Vector Database\",\"passed\":true,\"attempts\":4},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":4},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":18,\"title\":\"Streaming Responses\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":2},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":30,\"title\":\"Production Readiness & Final Testing\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":27,\"missionsCompleted\":30,\"missionsFirstTry\":14}},{\"member\":{\"id\":\"CAND-013\",\"name\":\"Ravi Patel\",\"jobRole\":\"Software Engineer\",\"yearsExperience\":15,\"education\":\"MS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":3},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"passed\":true,\"attempts\":2},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":3},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":2},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":3},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":2},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":2},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":27,\"missionsCompleted\":30,\"missionsFirstTry\":13}},{\"member\":{\"id\":\"CAND-014\",\"name\":\"Bethany Cole\",\"jobRole\":\"HR Manager\",\"yearsExperience\":10,\"education\":\"BA Human Resources\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":4},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":5},{\"day\":8,\"title\":\"Vector Databases Overview\",\"skipped\":true},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":5},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":4},{\"day\":20,\"title\":\"Conversation Memory & Context Management\",\"passed\":true,\"attempts\":3},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"skipped\":true},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":4}],\"signals\":{\"commitDays\":17,\"missionsCompleted\":20,\"missionsFirstTry\":1}},{\"member\":{\"id\":\"CAND-015\",\"name\":\"Noah Kim\",\"jobRole\":\"Principal Architect\",\"yearsExperience\":20,\"education\":\"MS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":1},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":14,\"title\":\"Fine-Tuning: Concepts & When to Use It\",\"skipped\":true},{\"day\":15,\"title\":\"Fine-Tuning: Hands-On with LoRA & QLoRA\",\"skipped\":true},{\"day\":21,\"title\":\"LangChain Agents\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":29,\"missionsCompleted\":29,\"missionsFirstTry\":27}},{\"member\":{\"id\":\"CAND-016\",\"name\":\"Isabella Rossi\",\"jobRole\":\"Software Engineer\",\"yearsExperience\":5,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":2},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":false,\"attempts\":4},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":3},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":false,\"attempts\":5},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":2},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":false,\"attempts\":4},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":19,\"missionsCompleted\":21,\"missionsFirstTry\":2}},{\"member\":{\"id\":\"CAND-017\",\"name\":\"Tyler Brooks\",\"jobRole\":\"Junior Developer\",\"yearsExperience\":0,\"education\":\"GED + Coding Bootcamp Certificate\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":3},{\"day\":3,\"title\":\"First AI Project, React Frontend & GitHub\",\"passed\":true,\"attempts\":5},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":5},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":5},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":5},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":5},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":4},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":5},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":4},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":3}],\"signals\":{\"commitDays\":30,\"missionsCompleted\":31,\"missionsFirstTry\":1}},{\"member\":{\"id\":\"CAND-018\",\"name\":\"Diane Foster\",\"jobRole\":\"AI Engineer\",\"yearsExperience\":4,\"education\":\"MS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":1},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":13,\"title\":\"Function Calling & Structured Outputs\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":31,\"missionsCompleted\":31,\"missionsFirstTry\":31}},{\"member\":{\"id\":\"CAND-019\",\"name\":\"Frank DeLuca\",\"jobRole\":\"Legacy Systems Engineer\",\"yearsExperience\":25,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":2},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"passed\":true,\"attempts\":1},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":4},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":3},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":17,\"title\":\"Chatbot Frontend Development\",\"passed\":true,\"attempts\":5},{\"day\":19,\"title\":\"Response Formatting & Rich Outputs\",\"passed\":true,\"attempts\":4},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":3},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":26,\"missionsCompleted\":29,\"missionsFirstTry\":11}},{\"member\":{\"id\":\"CAND-020\",\"name\":\"Priyanka Sharma\",\"jobRole\":\"Software Engineer\",\"yearsExperience\":5,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":1},{\"day\":3,\"title\":\"First AI Project, React Frontend & GitHub\",\"passed\":true,\"attempts\":1},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"skipped\":true},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":false,\"attempts\":2},{\"day\":8,\"title\":\"Vector Databases Overview\",\"skipped\":true},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":24,\"missionsCompleted\":27,\"missionsFirstTry\":19}}]}");
}),
"[project]/interview-os/curriculum.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"cohort\":\"AI Cohort · 31 days · 8 modules\",\"modules\":[{\"n\":1,\"title\":\"Environment & Tooling\",\"days\":[1,3]},{\"n\":2,\"title\":\"Data Foundations\",\"days\":[4,6]},{\"n\":3,\"title\":\"Embeddings & Vector Search\",\"days\":[7,10]},{\"n\":4,\"title\":\"LLM Core, Prompting & Fine-Tuning\",\"days\":[11,15]},{\"n\":5,\"title\":\"Chatbot Application Build\",\"days\":[16,20]},{\"n\":6,\"title\":\"Agentic AI & MCP\",\"days\":[21,24]},{\"n\":7,\"title\":\"Evaluation, Security & Deployment\",\"days\":[25,28]},{\"n\":8,\"title\":\"Production & Capstone\",\"days\":[29,31]}],\"days\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"type\":\"SETUP\",\"tools\":[\"VS Code\",\"Python\",\"Python Extension\",\"Pylance\",\"Virtual Environment\"],\"objectives\":[\"Install VS Code and Python on your machine\",\"Configure the Python extension and Pylance\",\"Create and activate a project virtual environment (.venv)\",\"Run and debug your first Python program inside VS Code\",\"Verify the development environment is ready for the remaining course\"]},{\"day\":2,\"title\":\"Local LLM & AI Coding Assistant Setup\",\"type\":\"SETUP\",\"tools\":[\"Ollama\",\"Qwen2.5-Coder\",\"GitHub Copilot\",\"Cline\"],\"objectives\":[\"Install Ollama and download a local coding model\",\"Verify the local model works through the Ollama CLI\",\"Connect VS Code to the local model using GitHub Copilot or Cline\",\"Generate code using the local AI assistant\",\"Confirm the complete AI coding workflow works offline\"]},{\"day\":3,\"title\":\"First AI Project, React Frontend & GitHub\",\"type\":\"BUILD\",\"tools\":[\"Python\",\"Ollama\",\"FastAPI\",\"React\",\"Vite\",\"Git\",\"GitHub\"],\"objectives\":[\"Build a command-line chatbot powered by your local Ollama model\",\"Scaffold a FastAPI backend with a health endpoint\",\"Create a React application using Vite\",\"Connect the React frontend with the FastAPI backend\",\"Initialize Git, commit the project, and publish it to GitHub\"]},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"type\":\"BUILD\",\"tools\":[\"Pandas\",\"SQLite\",\"SQL\",\"SQLAlchemy\"],\"objectives\":[\"Create synthetic healthcare plans and claims datasets\",\"Load and clean structured CSV data using Pandas\",\"Store the processed data in a SQLite database\",\"Write SQL queries to answer common healthcare questions\",\"Document reusable SQL queries for later chatbot integration\"]},{\"day\":5,\"title\":\"Reading & Processing Unstructured Data\",\"type\":\"BUILD\",\"tools\":[\"pdfplumber\",\"PyPDF\",\"python-docx\",\"Tesseract OCR\",\"BeautifulSoup\",\"Requests\"],\"objectives\":[\"Extract text from healthcare PDFs and Word documents\",\"Perform OCR on scanned enrollment forms\",\"Scrape useful content from a public healthcare webpage\",\"Clean and normalize extracted text from multiple sources\",\"Store the processed text files for knowledge-base creation\"]},{\"day\":6,\"title\":\"Building the Knowledge Base\",\"type\":\"BUILD\",\"tools\":[\"LangChain Text Splitters\",\"JSONL\",\"Python\"],\"objectives\":[\"Convert structured and unstructured healthcare data into a unified knowledge base\",\"Split long documents into retrieval-friendly chunks\",\"Attach metadata such as source, plan type, and document section to every chunk\",\"Export all processed records into a knowledge_base.jsonl file\",\"Validate chunk quality before using them for embeddings\"]},{\"day\":7,\"title\":\"Embeddings Explained\",\"type\":\"AI_CORE\",\"tools\":[\"Sentence Transformers\",\"OpenAI Embeddings\",\"Scikit-learn\",\"Matplotlib\"],\"objectives\":[\"Understand how text is converted into vector embeddings\",\"Generate embeddings for every knowledge base chunk\",\"Store embeddings alongside the original documents\",\"Visualize embedding clusters using PCA\",\"Analyze whether similar healthcare concepts cluster together\"]},{\"day\":8,\"title\":\"Vector Databases Overview\",\"type\":\"BUILD\",\"tools\":[\"ChromaDB\",\"Pinecone\"],\"objectives\":[\"Learn the role of vector databases in RAG applications\",\"Set up a local Chroma vector database\",\"Create a cloud-based Pinecone index for comparison\",\"Compare local and managed vector database solutions\",\"Select the most suitable database for the chatbot project\"]},{\"day\":9,\"title\":\"Building & Populating the Vector Database\",\"type\":\"BUILD\",\"tools\":[\"ChromaDB\",\"Sentence Transformers\"],\"objectives\":[\"Load knowledge base embeddings into the vector database\",\"Store documents together with metadata for filtering\",\"Verify that every knowledge base chunk has been indexed\",\"Test semantic search with healthcare-related questions\",\"Evaluate retrieval quality and metadata filtering\"]},{\"day\":10,\"title\":\"The Retrieval & Matching Engine\",\"type\":\"SHIP_IT\",\"tools\":[\"SQLite\",\"ChromaDB\",\"Python\"],\"objectives\":[\"Build a query router that decides between SQL, vector search, or hybrid retrieval\",\"Implement structured data lookup for plans and claims\",\"Implement semantic retrieval from the vector database\",\"Merge and deduplicate results from multiple retrieval sources\",\"Evaluate retrieval accuracy using a diverse set of healthcare questions\"]},{\"day\":11,\"title\":\"RAG End-to-End & LLM API Basics\",\"type\":\"BUILD\",\"tools\":[\"OpenAI SDK\",\"Ollama\",\"Groq\",\"Python\"],\"objectives\":[\"Connect the retrieval engine to an LLM to build a complete RAG pipeline\",\"Configure a local or hosted LLM provider using the OpenAI-compatible SDK\",\"Create a grounded prompt that answers only from retrieved context\",\"Generate answers using retrieved knowledge\",\"Evaluate chatbot responses against the retrieval-only baseline\"]},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"type\":\"LEARN\",\"tools\":[\"LLMs\",\"Prompt Templates\"],\"objectives\":[\"Understand zero-shot, few-shot, and chain-of-thought prompting\",\"Design multiple system prompt variations for the chatbot\",\"Compare prompts based on accuracy, compliance, and tone\",\"Evaluate prompt performance using a fixed question set\",\"Finalize the production-ready system prompt\"]},{\"day\":13,\"title\":\"Advanced Prompting: Function Calling & Structured Outputs\",\"type\":\"BUILD\",\"tools\":[\"OpenAI Function Calling\",\"Pydantic\",\"Python\"],\"objectives\":[\"Define tool schemas for healthcare-related chatbot functions\",\"Implement LLM function calling with automatic tool execution\",\"Validate structured outputs using Pydantic models\",\"Log tool calls for debugging and auditing\",\"Test different user queries to verify correct tool selection\"]},{\"day\":14,\"title\":\"Fine-Tuning: Concepts & When to Use It\",\"type\":\"LEARN\",\"tools\":[\"JSONL\",\"OpenAI\",\"LoRA\",\"QLoRA\"],\"objectives\":[\"Understand when fine-tuning is more appropriate than prompting or RAG\",\"Identify chatbot issues that fine-tuning can solve\",\"Create a high-quality fine-tuning dataset\",\"Validate and organize the dataset into training and test sets\",\"Prepare the project for model fine-tuning\"]},{\"day\":15,\"title\":\"Fine-Tuning: Hands-On with LoRA & QLoRA\",\"type\":\"SHIP_IT\",\"tools\":[\"PEFT\",\"Transformers\",\"BitsAndBytes\",\"OpenAI Fine-Tuning\",\"LoRA\"],\"objectives\":[\"Train or fine-tune an LLM using LoRA or the OpenAI fine-tuning workflow\",\"Load and evaluate the fine-tuned model\",\"Compare the base model and fine-tuned model on unseen test cases\",\"Measure improvements in tone, consistency, and response quality\",\"Document whether fine-tuning provides measurable benefits for the chatbot\"]},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"type\":\"BUILD\",\"tools\":[\"FastAPI\",\"SQLite\",\"Python\"],\"objectives\":[\"Create a /chat API endpoint for the healthcare chatbot\",\"Integrate retrieval, function calling, and LLM response generation\",\"Implement session-based conversation management\",\"Build a conversation history endpoint\",\"Test the complete backend API using Postman or cURL\"]},{\"day\":17,\"title\":\"Chatbot Frontend Development\",\"type\":\"BUILD\",\"tools\":[\"Streamlit\",\"Requests\",\"UUID\"],\"objectives\":[\"Build an interactive chat interface for the chatbot\",\"Connect the frontend to the backend chat API\",\"Maintain conversation history across user interactions\",\"Add a healthcare plan selector and new conversation option\",\"Validate end-to-end communication between frontend and backend\"]},{\"day\":18,\"title\":\"Full-Stack Integration & Streaming Responses\",\"type\":\"BUILD\",\"tools\":[\"FastAPI\",\"StreamingResponse\",\"Server-Sent Events\",\"Streamlit\"],\"objectives\":[\"Implement real-time streaming responses from the LLM\",\"Display generated tokens incrementally in the chat interface\",\"Add loading indicators for a better user experience\",\"Handle interrupted or failed streaming requests gracefully\",\"Verify smooth end-to-end streaming between backend and frontend\"]},{\"day\":19,\"title\":\"Response Formatting & Rich Outputs\",\"type\":\"BUILD\",\"tools\":[\"Pydantic\",\"Markdown\",\"Streamlit\"],\"objectives\":[\"Add citations to chatbot responses using retrieved knowledge\",\"Create structured cards for claims and coverage summaries\",\"Render Markdown content with tables, lists, and formatting\",\"Validate structured outputs before displaying them\",\"Improve chatbot readability and response trustworthiness\"]},{\"day\":20,\"title\":\"Conversation Memory & Context Management\",\"type\":\"SHIP_IT\",\"tools\":[\"SQLite\",\"FastAPI\",\"LLM\",\"Token Management\"],\"objectives\":[\"Persist conversation history across multiple user sessions\",\"Build context-aware conversations using previous messages\",\"Implement automatic conversation summarization for long chats\",\"Manage token limits while preserving important context\",\"Ensure the chatbot remembers user preferences throughout a conversation\"]},{\"day\":21,\"title\":\"Agentic Frameworks: LangChain Agents & Tool Use\",\"type\":\"BUILD\",\"tools\":[\"LangChain\",\"LangChain Agents\",\"ReAct\",\"Python\"],\"objectives\":[\"Convert function-calling workflows into a reasoning agent\",\"Wrap chatbot capabilities as reusable LangChain tools\",\"Build a ReAct agent capable of selecting the correct tool automatically\",\"Analyze reasoning traces to understand agent decision making\",\"Evaluate whether the agent chooses the right tools for healthcare queries\"]},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"type\":\"BUILD\",\"tools\":[\"CrewAI\",\"LangGraph\",\"Python\"],\"objectives\":[\"Create specialized agents for different healthcare domains\",\"Build a router agent that delegates requests to the correct specialist\",\"Implement a complete multi-agent workflow\",\"Compare multi-agent performance with a single-agent architecture\",\"Identify scenarios where multiple agents provide measurable benefits\"]},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"type\":\"BUILD\",\"tools\":[\"MCP Python SDK\",\"Claude Desktop\",\"Cline\",\"Python\"],\"objectives\":[\"Understand the purpose of the Model Context Protocol\",\"Build an MCP server exposing healthcare chatbot tools\",\"Connect the MCP server to an MCP-compatible client\",\"Expose multiple chatbot capabilities through standardized MCP tools\",\"Verify successful tool execution through live MCP interactions\"]},{\"day\":24,\"title\":\"Agentic Chatbot Integration\",\"type\":\"SHIP_IT\",\"tools\":[\"LangChain\",\"MCP\",\"FastAPI\",\"Python\"],\"objectives\":[\"Integrate agents, MCP tools, retrieval, and conversation memory\",\"Replace mock tools with live MCP-powered tool calls\",\"Implement retries, timeouts, and graceful error handling\",\"Perform failure testing to validate chatbot reliability\",\"Build a production-style agentic chatbot pipeline\"]},{\"day\":25,\"title\":\"Chatbot Evaluation & Testing\",\"type\":\"SHIP_IT\",\"tools\":[\"Python\",\"Evaluation Dataset\",\"Automated Testing\"],\"objectives\":[\"Create a benchmark dataset covering representative healthcare questions\",\"Evaluate chatbot responses for accuracy, grounding, and consistency\",\"Measure retrieval quality and end-to-end response performance\",\"Identify common failure cases and document improvement areas\",\"Establish baseline metrics before production deployment\"]},{\"day\":26,\"title\":\"Performance Optimization & Cost Management\",\"type\":\"OPTIMIZE\",\"tools\":[\"tiktoken\",\"Python\",\"FastAPI\"],\"objectives\":[\"Measure token usage across the chatbot pipeline\",\"Optimize retrieval and prompt size to reduce latency and cost\",\"Implement response caching for repeated queries\",\"Benchmark response time before and after optimization\",\"Document performance improvements using measurable metrics\"]},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"type\":\"BUILD\",\"tools\":[\"FastAPI\",\"Python\",\"Authentication\",\"Input Validation\"],\"objectives\":[\"Secure chatbot APIs against unauthorized access\",\"Validate and sanitize user inputs before processing\",\"Protect sensitive healthcare information throughout the pipeline\",\"Implement prompt-injection and jailbreak safeguards\",\"Test common security scenarios and document mitigation strategies\"]},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"type\":\"SHIP_IT\",\"tools\":[\"Docker\",\"Kubernetes\",\"FastAPI\",\"React\"],\"objectives\":[\"Containerize the chatbot backend and frontend using Docker\",\"Deploy the application to a Kubernetes cluster\",\"Configure health checks and environment variables\",\"Verify the deployed chatbot functions correctly\",\"Prepare the application for production hosting\"]},{\"day\":29,\"title\":\"Monitoring, Logging & Observability\",\"type\":\"BUILD\",\"tools\":[\"Python Logging\",\"Prometheus\",\"Grafana\"],\"objectives\":[\"Add structured logging throughout the chatbot pipeline\",\"Monitor API performance and chatbot usage\",\"Track failures, latency, and tool execution metrics\",\"Build dashboards for production observability\",\"Use monitoring insights to improve chatbot reliability\"]},{\"day\":30,\"title\":\"Production Readiness & Final Testing\",\"type\":\"SHIP_IT\",\"tools\":[\"FastAPI\",\"Docker\",\"Kubernetes\",\"Python\"],\"objectives\":[\"Perform complete end-to-end testing of the chatbot\",\"Validate retrieval, agent workflows, and frontend integration\",\"Fix production issues discovered during testing\",\"Complete deployment and operational documentation\",\"Prepare the chatbot for real-world production usage\"]},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"type\":\"CAPSTONE\",\"tools\":[\"FastAPI\",\"React\",\"LangChain\",\"MCP\",\"Docker\",\"Kubernetes\"],\"objectives\":[\"Demonstrate the complete enterprise healthcare chatbot\",\"Showcase retrieval, RAG, agents, MCP, and conversation memory\",\"Present the deployed application with production architecture\",\"Evaluate the chatbot using real-world scenarios\",\"Publish the final project with source code and documentation\"]}]}");
}),
"[project]/interview-os/lib/interview-prompt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildInterviewerPrompt",
    ()=>buildInterviewerPrompt
]);
function buildInterviewerPrompt(input) {
    return `You are a senior technical interviewer. Run a concise, natural technical interview for one candidate. Ask exactly one question; do not greet, explain your process, score the candidate, or use robotic phrasing.

Candidate: ${input.candidate.member.name}, ${input.candidate.member.jobRole}, ${input.candidate.member.yearsExperience} years experience.
Learning signals: ${input.candidate.signals.commitDays} commit days, ${input.candidate.signals.missionsCompleted} missions completed, ${input.candidate.signals.missionsFirstTry} first-try missions.
Question number: ${input.questionNumber} of 8. Current target difficulty: ${input.difficulty}. Topics already covered: ${input.topicsCovered.join(", ") || "none"}.
${input.priorQuestion ? `Previous question: ${input.priorQuestion}\nCandidate answer: ${input.priorAnswer}` : "This is the opening question."}

Eligible curriculum topics (choose one, prefer an uncovered topic; use the objective directly):
${JSON.stringify(input.eligibleTopics)}

Evaluate the previous answer silently if present. A strong answer should earn a deeper implementation, trade-off, reliability, or system-design question. A weak answer should earn a focused clarification, simpler question, or a different completed topic. Do not repeat a topic already covered unless the previous answer was genuinely strong and a follow-up is useful.

Return JSON only, matching this schema:
{"day":number,"difficulty":"Easy"|"Medium"|"Hard","question":string,"evaluation":{"score":number,"strengths":string[],"gaps":string[],"reasoning":string}}
The score is 1-5. Keep arrays concise and question under 90 words.`;
}
}),
"[project]/interview-os/lib/interview-service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "candidateSchema",
    ()=>candidateSchema,
    "continueInterview",
    ()=>continueInterview,
    "getCompletedReport",
    ()=>getCompletedReport,
    "startInterview",
    ()=>startInterview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$candidates$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/candidates.json.[json].cjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$curriculum$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/curriculum.json.[json].cjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$llm$2d$provider$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/lib/llm-provider.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$interview$2d$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/lib/interview-prompt.ts [app-route] (ecmascript)");
;
;
;
;
;
const missionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    day: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    passed: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    skipped: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    attempts: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional()
});
const candidateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    member: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        jobRole: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        yearsExperience: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0),
        education: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
    }),
    missions: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(missionSchema).min(1),
    signals: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        commitDays: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative(),
        missionsCompleted: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative(),
        missionsFirstTry: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative()
    })
});
const curriculumDaySchema = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    day: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    tools: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1),
    objectives: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1)
});
const curriculumSchema = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    cohort: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    modules: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        n: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
        title: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        days: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int()).min(1)
    })).min(1),
    days: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(curriculumDaySchema).min(1)
});
const canonicalCandidates = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    candidates: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(candidateSchema).min(1)
}).parse(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$candidates$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]).candidates;
const curriculum = curriculumSchema.parse(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$curriculum$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]);
const candidatesById = new Map(canonicalCandidates.map((candidate)=>[
        candidate.member.id,
        candidate
    ]));
const daysByNumber = new Map(curriculum.days.map((day)=>[
        day.day,
        day
    ]));
const SESSION_LENGTH = 8;
const sessions = new Map();
const completedSessions = new Map();
const llm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$llm$2d$provider$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["configuredLlmProvider"])();
function moduleFor(day) {
    return curriculum.modules.find((entry)=>entry.days[0] <= day && day <= entry.days[entry.days.length - 1])?.n;
}
function status(mission) {
    return mission.passed === false ? "failed" : mission.skipped ? "skipped" : "completed";
}
function planFor(candidate) {
    const available = Array.from(new Map(candidate.missions.filter((mission)=>daysByNumber.has(mission.day)).map((mission)=>[
            mission.day,
            mission
        ])).values()).sort((a, b)=>a.day - b.day);
    const selected = [];
    const modules = new Set();
    for (const mission of available){
        const n = moduleFor(mission.day);
        if (n && !modules.has(n)) {
            selected.push(mission);
            modules.add(n);
        }
        if (modules.size === 4) break;
    }
    for (const mission of available){
        if (!selected.some((item)=>item.day === mission.day)) selected.push(mission);
        if (selected.length === SESSION_LENGTH) break;
    }
    if (selected.length < SESSION_LENGTH || new Set(selected.map((mission)=>mission.day)).size < 4) throw new Error(`Candidate ${candidate.member.id} does not have enough curriculum history for this interview.`);
    return selected.slice(0, SESSION_LENGTH);
}
function fallbackEvaluation(answer) {
    const words = answer?.trim().split(/\s+/).filter(Boolean).length ?? 0;
    const technicalSignals = /trade-?off|latency|evaluation|metric|test|retrieval|architecture|security|fallback|monitor/i.test(answer ?? "") ? 1 : 0;
    const score = !answer ? 3 : words >= 70 && technicalSignals ? 5 : words >= 35 ? 4 : words >= 15 ? 3 : 2;
    return {
        score,
        strengths: score >= 4 ? [
            "Explained a concrete technical approach."
        ] : [
            "Provided a starting direction."
        ],
        gaps: score <= 2 ? [
            "Add implementation detail, trade-offs, and a concrete example."
        ] : [
            "Make success metrics explicit."
        ],
        reasoning: "Deterministic fallback evaluation based on answer specificity."
    };
}
function nextDifficulty(evaluation) {
    if (!evaluation) return "Medium";
    if (evaluation.score >= 4) return "Hard";
    if (evaluation.score <= 2) return "Easy";
    return "Medium";
}
function eligible(session) {
    return session.plan.filter((mission)=>!session.topicsCovered.includes(daysByNumber.get(mission.day).title));
}
function fallbackQuestion(session, mission, difficulty) {
    const day = daysByNumber.get(mission.day);
    const objective = day.objectives[session.questionsAsked.length % day.objectives.length];
    const lead = difficulty === "Hard" ? "Go beyond the happy path: describe the implementation trade-offs and failure modes." : difficulty === "Easy" ? "Start with the core idea, then explain one practical step." : "Explain the design choices you would make and how you would validate them.";
    const history = status(mission) === "skipped" ? "You skipped this mission, so reason from first principles." : status(mission) === "failed" ? "This was a difficult area in the cohort, so focus on how you would approach it differently." : `You completed this mission${mission.attempts ? ` in ${mission.attempts} attempt${mission.attempts === 1 ? "" : "s"}` : ""}.`;
    return `${history} For ${day.title}, the objective is to ${objective.charAt(0).toLowerCase()}${objective.slice(1)}. ${lead}`;
}
async function askNext(session, priorAnswer) {
    const options = eligible(session);
    const fallbackMission = options[0] ?? session.plan.find((mission)=>!session.questionsAsked.some((question)=>question.day === mission.day));
    if (!fallbackMission) throw new Error("No eligible curriculum topics remain for this session.");
    const priorEvaluation = priorAnswer ? fallbackEvaluation(priorAnswer) : undefined;
    const desiredDifficulty = nextDifficulty(priorEvaluation);
    const optionData = options.map((mission)=>{
        const day = daysByNumber.get(mission.day);
        return {
            day: day.day,
            title: day.title,
            objectives: day.objectives,
            missionStatus: status(mission),
            attempts: mission.attempts
        };
    });
    const decision = await llm?.generateInterviewDecision((0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$interview$2d$prompt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildInterviewerPrompt"])({
        candidate: session.candidate,
        questionNumber: session.questionsAsked.length + 1,
        priorAnswer,
        priorQuestion: session.currentQuestion,
        topicsCovered: session.topicsCovered,
        difficulty: desiredDifficulty,
        eligibleTopics: optionData
    })) ?? null;
    const validDecision = decision && options.some((mission)=>mission.day === decision.day) ? decision : null;
    const mission = validDecision ? options.find((item)=>item.day === validDecision.day) : fallbackMission;
    const day = daysByNumber.get(mission.day);
    const evaluation = validDecision?.evaluation ?? priorEvaluation;
    if (priorAnswer && evaluation) {
        session.answerEvaluations.push(evaluation);
        (session.topicScores[session.currentDay ? daysByNumber.get(session.currentDay).title : day.title] ??= []).push(evaluation.score);
    }
    const difficulty = validDecision?.difficulty ?? desiredDifficulty;
    const question = validDecision?.question ?? fallbackQuestion(session, mission, difficulty);
    session.difficulty = difficulty;
    session.currentDay = day.day;
    session.currentQuestion = question;
    session.topicsCovered.push(day.title);
    session.questionsAsked.push({
        day: day.day,
        question,
        topic: day.title,
        difficulty
    });
    session.messages.push({
        role: "interviewer",
        content: question
    });
    return {
        reply: question,
        done: false,
        context: {
            day: day.day,
            topic: day.title,
            difficulty,
            questionNumber: session.questionsAsked.length
        }
    };
}
function feedback(session) {
    const avg = session.answerEvaluations.length ? session.answerEvaluations.reduce((sum, item)=>sum + item.score, 0) / session.answerEvaluations.length : 0;
    const gaps = session.answerEvaluations.flatMap((item)=>item.gaps).slice(0, 2);
    const strengths = session.answerEvaluations.flatMap((item)=>item.strengths).slice(0, 2);
    return {
        summary: `${session.candidate.member.name} completed ${session.questionsAsked.length} adaptive questions across ${new Set(session.questionsAsked.map((item)=>item.day)).size} curriculum days.`,
        strengths: strengths.length ? strengths : [
            "Completed a full technical conversation."
        ],
        gaps: gaps.length ? gaps : [
            "Continue making implementation trade-offs explicit."
        ],
        next: [
            `Revisit the lowest-scoring topic from ${session.topicsCovered.join(", ")}.`,
            `Practice explaining architecture decisions in terms of measurable outcomes. ${avg >= 4 ? "Push further into failure modes and scale." : "Start with one concrete example per answer."}`
        ]
    };
}
function completedReport(session, finalFeedback) {
    const average = session.answerEvaluations.reduce((sum, evaluation)=>sum + evaluation.score, 0) / Math.max(session.answerEvaluations.length, 1);
    const overall = Math.round(average * 20);
    const questionLengths = session.messages.filter((message)=>message.role === "candidate").map((message)=>message.content.trim().split(/\s+/).filter(Boolean).length);
    const communication = Math.min(100, Math.round(questionLengths.reduce((sum, length)=>sum + Math.min(length, 80), 0) / Math.max(questionLengths.length, 1) * 1.25));
    const technicalKnowledge = overall;
    const problemSolving = Math.round(overall * 0.7 + session.answerEvaluations.filter((evaluation)=>evaluation.score >= 4).length / Math.max(session.answerEvaluations.length, 1) * 30);
    const scoredTopics = Object.entries(session.topicScores).map(([topic, scores])=>({
            topic,
            score: Math.round(scores.reduce((sum, score)=>sum + score, 0) / scores.length * 20)
        }));
    const recommendedDays = session.plan.map((mission)=>{
        const day = daysByNumber.get(mission.day);
        const topicScore = scoredTopics.find((topic)=>topic.topic === day.title)?.score ?? (status(mission) === "completed" ? 65 : 40);
        return {
            day: day.day,
            title: day.title,
            score: topicScore
        };
    }).sort((a, b)=>a.score - b.score).slice(0, 3);
    return {
        candidate: session.candidate,
        feedback: finalFeedback,
        questionsAsked: session.questionsAsked,
        messages: session.messages,
        topicsCovered: session.topicsCovered,
        difficultyProgression: session.questionsAsked.map((question)=>question.difficulty),
        answerEvaluations: session.answerEvaluations,
        topicScores: session.topicScores,
        scores: {
            overall,
            technicalKnowledge,
            problemSolving,
            communication
        },
        recommendedDays
    };
}
function getCompletedReport(sessionId) {
    return completedSessions.get(sessionId);
}
async function startInterview(sessionId, received) {
    const candidate = candidatesById.get(received.member.id);
    if (!candidate) throw new Error("Candidate was not found in the supplied candidate data.");
    const session = {
        candidate,
        messages: [],
        questionsAsked: [],
        topicsCovered: [],
        difficulty: "Medium",
        answerEvaluations: [],
        topicScores: {},
        plan: planFor(candidate)
    };
    sessions.set(sessionId, session);
    return askNext(session);
}
async function continueInterview(sessionId, message) {
    const session = sessions.get(sessionId);
    if (!session) throw new Error("Interview session was not found. Start a new interview with a candidate.");
    session.messages.push({
        role: "candidate",
        content: message
    });
    if (session.questionsAsked.length >= SESSION_LENGTH) {
        const evaluation = fallbackEvaluation(message);
        session.answerEvaluations.push(evaluation);
        const lastTopic = session.questionsAsked[session.questionsAsked.length - 1]?.topic;
        if (lastTopic) (session.topicScores[lastTopic] ??= []).push(evaluation.score);
        const finalFeedback = feedback(session);
        completedSessions.set(sessionId, completedReport(session, finalFeedback));
        sessions.delete(sessionId);
        return {
            reply: "Interview completed.",
            done: true,
            feedback: finalFeedback
        };
    }
    return askNext(session, message);
}
}),
"[project]/interview-os/lib/llm-provider.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "configuredLlmProvider",
    ()=>configuredLlmProvider,
    "interviewerDecisionSchema",
    ()=>interviewerDecisionSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const interviewerDecisionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    day: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    difficulty: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "Easy",
        "Medium",
        "Hard"
    ]),
    question: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(12).max(900),
    evaluation: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        score: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(5),
        strengths: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).max(4),
        gaps: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).max(4),
        reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(600)
    })
});
function responseText(body) {
    if (!body || typeof body !== "object") return null;
    const data = body;
    if (typeof data.output_text === "string") return data.output_text;
    return data.output?.flatMap((item)=>item.content ?? []).map((item)=>typeof item.text === "string" ? item.text : "").join("") || null;
}
class OpenAiCompatibleProvider {
    apiKey;
    baseUrl;
    model;
    constructor(apiKey, baseUrl, model){
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.model = model;
    }
    async generateInterviewDecision(prompt) {
        try {
            const response = await fetch(`${this.baseUrl.replace(/\/$/, "")}/responses`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.apiKey}`
                },
                signal: AbortSignal.timeout(10_000),
                body: JSON.stringify({
                    model: this.model,
                    input: prompt,
                    text: {
                        format: {
                            type: "json_object"
                        }
                    },
                    temperature: 0.35
                })
            });
            if (!response.ok) return null;
            const text = responseText(await response.json());
            if (!text) return null;
            return interviewerDecisionSchema.safeParse(JSON.parse(text)).data ?? null;
        } catch  {
            return null;
        }
    }
}
function configuredLlmProvider() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return null;
    return new OpenAiCompatibleProvider(apiKey, process.env.OPENAI_BASE_URL ?? "https://api.openai.com/v1", process.env.OPENAI_MODEL ?? "gpt-4.1-mini");
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__08-o6fo._.js.map