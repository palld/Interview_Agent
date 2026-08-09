(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/interview-os/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dashed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDashed$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/circle-dashed.mjs [app-client] (ecmascript) <export default as CircleDashed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/target.mjs [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$candidates$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/candidates.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/components/ui/dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const candidates = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$candidates$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].candidates;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 12
    },
    show: (i = 0)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.45,
                delay: i * 0.045,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            }
        })
};
function initials(name) {
    return name.split(" ").map((part)=>part[0]).join("").slice(0, 2);
}
function stats(candidate) {
    const passed = candidate.missions.filter((mission)=>mission.passed).length;
    const failed = candidate.missions.filter((mission)=>mission.passed === false).length;
    const skipped = candidate.missions.filter((mission)=>mission.skipped).length;
    return {
        passed,
        failed,
        skipped,
        firstTry: Math.round(candidate.signals.missionsFirstTry / Math.max(candidate.signals.missionsCompleted, 1) * 100)
    };
}
function experience(years) {
    return years === 0 ? "Early career" : `${years} ${years === 1 ? "year" : "years"} experience`;
}
function Avatar({ name, large = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-signal to-pulse font-semibold text-ink ${large ? "h-14 w-14 text-base" : "h-10 w-10 text-xs"}`,
        children: initials(name)
    }, void 0, false, {
        fileName: "[project]/interview-os/app/dashboard/page.tsx",
        lineNumber: 51,
        columnNumber: 10
    }, this);
}
_c = Avatar;
function CandidateCard({ candidate, index, onSelect }) {
    const result = stats(candidate);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        variants: fadeUp,
        initial: "hidden",
        animate: "show",
        custom: index,
        whileHover: {
            y: -3
        },
        onClick: onSelect,
        className: "group w-full rounded-xl border border-line/10 bg-surface/70 p-5 text-left shadow-[0_12px_32px_-24px_rgba(0,0,0,0.8)] transition-colors hover:border-signal/35 hover:bg-surface-raised/70",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                        name: candidate.member.name
                    }, void 0, false, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 57,
                        columnNumber: 45
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-sm font-semibold text-text-primary",
                                                children: candidate.member.name
                                            }, void 0, false, {
                                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 177
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 truncate text-xs text-text-muted",
                                                children: candidate.member.jobRole
                                            }, void 0, false, {
                                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 268
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 172
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "signal",
                                        className: "shrink-0 text-[10px]",
                                        children: candidate.member.status.toLowerCase()
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 359
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 57,
                                columnNumber: 116
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-xs text-text-faint",
                                children: [
                                    experience(candidate.member.yearsExperience),
                                    " · ",
                                    candidate.member.education
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 57,
                                columnNumber: 469
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 57,
                        columnNumber: 84
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 57,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid grid-cols-3 gap-2 border-y border-line/10 py-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold",
                                children: candidate.signals.missionsCompleted
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 58,
                                columnNumber: 96
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[10px] text-text-faint",
                                children: "missions"
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 58,
                                columnNumber: 174
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 58,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-x border-line/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold",
                                children: candidate.signals.commitDays
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 58,
                                columnNumber: 283
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[10px] text-text-faint",
                                children: "commit days"
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 58,
                                columnNumber: 354
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 58,
                        columnNumber: 242
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold",
                                children: [
                                    result.firstTry,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 58,
                                columnNumber: 430
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[10px] text-text-faint",
                                children: "first try"
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 58,
                                columnNumber: 489
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 58,
                        columnNumber: 425
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 58,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 text-[11px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-mint",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 153
                                    }, this),
                                    result.passed
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 59,
                                columnNumber: 101
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-danger",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 269
                                    }, this),
                                    result.failed
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 59,
                                columnNumber: 215
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-text-faint",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dashed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDashed$3e$__["CircleDashed"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 384
                                    }, this),
                                    result.skipped
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 59,
                                columnNumber: 326
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 59,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "h-4 w-4 text-text-faint transition-all group-hover:translate-x-1 group-hover:text-signal"
                    }, void 0, false, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 59,
                        columnNumber: 453
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 59,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/interview-os/app/dashboard/page.tsx",
        lineNumber: 56,
        columnNumber: 10
    }, this);
}
_c1 = CandidateCard;
function CandidateDetail({ candidate, open, onOpenChange }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    if (!candidate) return null;
    const result = stats(candidate);
    const start = ()=>{
        localStorage.setItem("interviewos.selectedCandidate", JSON.stringify(candidate));
        router.push("/interview");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-h-[90vh] max-w-2xl overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                name: candidate.member.name,
                                large: true
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 68,
                                columnNumber: 178
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        children: candidate.member.name
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 228
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        className: "mt-1",
                                        children: [
                                            candidate.member.jobRole,
                                            " · ",
                                            experience(candidate.member.yearsExperience)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 278
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-text-faint",
                                        children: candidate.member.education
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 409
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 68,
                                columnNumber: 223
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 68,
                        columnNumber: 138
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                    lineNumber: 68,
                    columnNumber: 124
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4",
                    children: [
                        [
                            "Completion",
                            `${candidate.signals.missionsCompleted}/31`
                        ],
                        [
                            "Commitment",
                            `${candidate.signals.commitDays} days`
                        ],
                        [
                            "First-try rate",
                            `${result.firstTry}%`
                        ],
                        [
                            "Status",
                            candidate.member.status.toLowerCase()
                        ]
                    ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-line/10 bg-surface-raised/40 p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] uppercase tracking-wide text-text-faint",
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 389
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm font-semibold capitalize",
                                    children: value
                                }, void 0, false, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 467
                                }, this)
                            ]
                        }, label, true, {
                            fileName: "[project]/interview-os/app/dashboard/page.tsx",
                            lineNumber: 69,
                            columnNumber: 302
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                    lineNumber: 69,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold",
                                    children: "Learning journey"
                                }, void 0, false, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 78
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-text-muted",
                                    children: [
                                        candidate.missions.length,
                                        " recorded missions"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 137
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/interview-os/app/dashboard/page.tsx",
                            lineNumber: 70,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-2",
                            children: candidate.missions.map((mission)=>{
                                const tone = mission.passed ? "text-mint bg-mint/10" : mission.skipped ? "text-text-muted bg-surface-raised" : "text-danger bg-danger/10";
                                const label = mission.passed ? "Passed" : mission.skipped ? "Skipped" : "Failed";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 rounded-lg border border-line/10 bg-surface/45 px-3 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-10 font-mono text-[11px] text-text-faint",
                                            children: [
                                                "Day ",
                                                mission.day
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 674
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "min-w-0 flex-1 truncate text-xs text-text-primary",
                                            children: mission.title
                                        }, void 0, false, {
                                            fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 759
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `rounded-full px-2 py-0.5 text-[10px] font-medium ${tone}`,
                                            children: [
                                                label,
                                                mission.attempts ? ` · ${mission.attempts} ${mission.attempts === 1 ? "try" : "tries"}` : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 843
                                        }, this)
                                    ]
                                }, `${mission.day}-${mission.title}`, true, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 536
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/interview-os/app/dashboard/page.tsx",
                            lineNumber: 70,
                            columnNumber: 237
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                    lineNumber: 70,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky bottom-0 -mx-6 -mb-6 mt-6 border-t border-line/10 bg-surface/95 p-4 backdrop-blur",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: start,
                        className: "w-full",
                        children: [
                            "Start Interview with ",
                            candidate.member.name.split(" ")[0],
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 71,
                                columnNumber: 213
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 71,
                        columnNumber: 111
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                    lineNumber: 71,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/interview-os/app/dashboard/page.tsx",
            lineNumber: 68,
            columnNumber: 58
        }, this)
    }, void 0, false, {
        fileName: "[project]/interview-os/app/dashboard/page.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_s(CandidateDetail, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = CandidateDetail;
function DashboardPage() {
    _s1();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All roles");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const timer = window.setTimeout({
                "DashboardPage.useEffect.timer": ()=>setLoading(false)
            }["DashboardPage.useEffect.timer"], 280);
            return ({
                "DashboardPage.useEffect": ()=>window.clearTimeout(timer)
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], []);
    const roles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[roles]": ()=>[
                "All roles",
                ...Array.from(new Set(candidates.map({
                    "DashboardPage.useMemo[roles]": (candidate)=>candidate.member.jobRole
                }["DashboardPage.useMemo[roles]"]))).sort()
            ]
    }["DashboardPage.useMemo[roles]"], []);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[filtered]": ()=>candidates.filter({
                "DashboardPage.useMemo[filtered]": (candidate)=>candidate.member.name.toLowerCase().includes(query.toLowerCase()) && (role === "All roles" || candidate.member.jobRole === role)
            }["DashboardPage.useMemo[filtered]"])
    }["DashboardPage.useMemo[filtered]"], [
        query,
        role
    ]);
    const cohortStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[cohortStats]": ()=>({
                total: candidates.length,
                completed: candidates.filter({
                    "DashboardPage.useMemo[cohortStats]": (candidate)=>candidate.member.status === "COMPLETED"
                }["DashboardPage.useMemo[cohortStats]"]).length,
                averageCommit: Math.round(candidates.reduce({
                    "DashboardPage.useMemo[cohortStats]": (sum, candidate)=>sum + candidate.signals.commitDays
                }["DashboardPage.useMemo[cohortStats]"], 0) / candidates.length),
                firstTry: Math.round(candidates.reduce({
                    "DashboardPage.useMemo[cohortStats]": (sum, candidate)=>sum + stats(candidate).firstTry
                }["DashboardPage.useMemo[cohortStats]"], 0) / candidates.length)
            })
    }["DashboardPage.useMemo[cohortStats]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-[0.16em] text-signal",
                                children: "Cohort intelligence"
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 84,
                                columnNumber: 120
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
                                children: "Candidate dashboard"
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 84,
                                columnNumber: 220
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 max-w-xl text-sm leading-relaxed text-text-muted",
                                children: "Review learning signal, select a candidate, then begin a focused interview session."
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 84,
                                columnNumber: 315
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 84,
                        columnNumber: 115
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                        variant: "outline",
                        className: "w-fit",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "mr-1.5 h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 84,
                                columnNumber: 520
                            }, this),
                            "ABTalks AI Cohort"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 84,
                        columnNumber: 477
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 84,
                columnNumber: 37
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
                children: [
                    [
                        __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        cohortStats.total,
                        "candidates in cohort"
                    ],
                    [
                        __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                        cohortStats.completed,
                        "completed journey"
                    ],
                    [
                        __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"],
                        `${cohortStats.averageCommit}d`,
                        "avg. commitment"
                    ],
                    [
                        __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        `${cohortStats.firstTry}%`,
                        "avg. first-try rate"
                    ]
                ].map(([Icon, value, label])=>{
                    const StatIcon = Icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass rounded-xl p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-text-muted",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 508
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatIcon, {
                                        className: "h-4 w-4 text-signal"
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 574
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 85,
                                columnNumber: 457
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-2xl font-semibold tracking-tight",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 85,
                                columnNumber: 624
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 85,
                        columnNumber: 397
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 85,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass rounded-xl p-3 sm:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 lg:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-faint"
                                }, void 0, false, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 136
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    value: query,
                                    onChange: (event)=>setQuery(event.target.value),
                                    placeholder: "Search candidates by name...",
                                    className: "pl-9"
                                }, void 0, false, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 243
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/interview-os/app/dashboard/page.tsx",
                            lineNumber: 86,
                            columnNumber: 103
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                    className: "h-4 w-4 text-text-faint"
                                }, void 0, false, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 424
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "role-filter",
                                    className: "sr-only",
                                    children: "Filter by role"
                                }, void 0, false, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 481
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "role-filter",
                                    value: role,
                                    onChange: (event)=>setRole(event.target.value),
                                    className: "h-10 min-w-0 flex-1 rounded-md border border-line/10 bg-surface px-3 text-sm text-text-primary outline-none focus:border-signal/50 lg:w-60",
                                    children: roles.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: item,
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 812
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 552
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/interview-os/app/dashboard/page.tsx",
                            lineNumber: 86,
                            columnNumber: 383
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/interview-os/app/dashboard/page.tsx",
                    lineNumber: 86,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 86,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-text-muted",
                        children: loading ? "Loading candidates..." : `${filtered.length} ${filtered.length === 1 ? "candidate" : "candidates"} found`
                    }, void 0, false, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 87,
                        columnNumber: 56
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-3 text-[11px] text-text-faint sm:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-mint",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 348
                                    }, this),
                                    "Passed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 87,
                                columnNumber: 296
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-danger",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 451
                                    }, this),
                                    "Failed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 87,
                                columnNumber: 397
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dashed$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDashed$3e$__["CircleDashed"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 537
                                    }, this),
                                    "Skipped"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                                lineNumber: 87,
                                columnNumber: 495
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 87,
                        columnNumber: 217
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 87,
                columnNumber: 5
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                children: Array.from({
                    length: 6
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-64 animate-pulse rounded-xl border border-line/10 bg-surface-raised/40"
                    }, index, false, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 88,
                        columnNumber: 119
                    }, this))
            }, void 0, false, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 88,
                columnNumber: 16
            }, this) : filtered.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                children: filtered.map((candidate, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CandidateCard, {
                        candidate: candidate,
                        index: index,
                        onSelect: ()=>setSelected(candidate)
                    }, candidate.member.id, false, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 88,
                        columnNumber: 346
                    }, this))
            }, void 0, false, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 88,
                columnNumber: 252
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass flex min-h-72 flex-col items-center justify-center rounded-xl px-5 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "h-8 w-8 text-text-faint"
                    }, void 0, false, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 88,
                        columnNumber: 578
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-4 text-lg font-semibold",
                        children: "No candidates found"
                    }, void 0, false, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 88,
                        columnNumber: 624
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 max-w-sm text-sm text-text-muted",
                        children: "Try a different name or reset the role filter to see the full cohort."
                    }, void 0, false, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 88,
                        columnNumber: 691
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "secondary",
                        size: "sm",
                        className: "mt-5",
                        onClick: ()=>{
                            setQuery("");
                            setRole("All roles");
                        },
                        children: "Reset filters"
                    }, void 0, false, {
                        fileName: "[project]/interview-os/app/dashboard/page.tsx",
                        lineNumber: 88,
                        columnNumber: 817
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 88,
                columnNumber: 476
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CandidateDetail, {
                candidate: selected,
                open: Boolean(selected),
                onOpenChange: (open)=>!open && setSelected(null)
            }, void 0, false, {
                fileName: "[project]/interview-os/app/dashboard/page.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/interview-os/app/dashboard/page.tsx",
        lineNumber: 84,
        columnNumber: 10
    }, this);
}
_s1(DashboardPage, "0ts8uqZ3GiqMtwaFUHZ+5Nd0reU=");
_c3 = DashboardPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "CandidateCard");
__turbopack_context__.k.register(_c2, "CandidateDetail");
__turbopack_context__.k.register(_c3, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/interview-os/candidates.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"candidates\":[{\"member\":{\"id\":\"CAND-001\",\"name\":\"Sarah Johnson\",\"jobRole\":\"Senior Data Engineer\",\"yearsExperience\":9,\"education\":\"MS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":2},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":4},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":2},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":2},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":3},{\"day\":29,\"title\":\"Monitoring, Logging & Observability\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":28,\"missionsCompleted\":30,\"missionsFirstTry\":20}},{\"member\":{\"id\":\"CAND-002\",\"name\":\"Alex Turner\",\"jobRole\":\"Backend Software Engineer\",\"yearsExperience\":5,\"education\":\"B.Tech Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":3},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":2},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":4},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":5},{\"day\":13,\"title\":\"Function Calling & Structured Outputs\",\"passed\":true,\"attempts\":4},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":18,\"title\":\"Streaming Responses\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":3},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":22,\"missionsCompleted\":29,\"missionsFirstTry\":10}},{\"member\":{\"id\":\"CAND-003\",\"name\":\"Emily Chen\",\"jobRole\":\"AI Engineer\",\"yearsExperience\":6,\"education\":\"MS Artificial Intelligence\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":1},{\"day\":11,\"title\":\"RAG End-to-End & LLM API Basics\",\"passed\":true,\"attempts\":1},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":13,\"title\":\"Function Calling & Structured Outputs\",\"passed\":true,\"attempts\":1},{\"day\":21,\"title\":\"LangChain Agents\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":31,\"missionsCompleted\":31,\"missionsFirstTry\":30}},{\"member\":{\"id\":\"CAND-004\",\"name\":\"David Miller\",\"jobRole\":\"Business Analyst\",\"yearsExperience\":8,\"education\":\"MBA\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":4},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":5},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":5},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":3},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":2},{\"day\":20,\"title\":\"Conversation Memory & Context Management\",\"passed\":true,\"attempts\":3},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":4},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":5},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":18,\"missionsCompleted\":28,\"missionsFirstTry\":6}},{\"member\":{\"id\":\"CAND-005\",\"name\":\"Michael Brown\",\"jobRole\":\"DevOps Engineer\",\"yearsExperience\":10,\"education\":\"B.Tech Information Technology\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":2},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":2},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":2},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":4},{\"day\":18,\"title\":\"Streaming Responses\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":2},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":3},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":29,\"title\":\"Monitoring, Logging & Observability\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":30,\"missionsCompleted\":31,\"missionsFirstTry\":22}},{\"member\":{\"id\":\"CAND-006\",\"name\":\"Wendy Foster\",\"jobRole\":\"Marketing Manager\",\"yearsExperience\":12,\"education\":\"BA Marketing\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":3},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":5},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":5},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":4},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":4},{\"day\":17,\"title\":\"Chatbot Frontend Development\",\"passed\":true,\"attempts\":2},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":5},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":3}],\"signals\":{\"commitDays\":19,\"missionsCompleted\":24,\"missionsFirstTry\":2}},{\"member\":{\"id\":\"CAND-007\",\"name\":\"Ethan Brooks\",\"jobRole\":\"Computer Science Intern\",\"yearsExperience\":0,\"education\":\"BS Computer Science (in progress)\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":1},{\"day\":3,\"title\":\"First AI Project, React Frontend & GitHub\",\"passed\":true,\"attempts\":1},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":2},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":26,\"missionsCompleted\":27,\"missionsFirstTry\":22}},{\"member\":{\"id\":\"CAND-008\",\"name\":\"Harold Whitfield\",\"jobRole\":\"Distinguished Engineer\",\"yearsExperience\":28,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":1},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"passed\":true,\"attempts\":1},{\"day\":5,\"title\":\"Reading & Processing Unstructured Data\",\"passed\":true,\"attempts\":1},{\"day\":14,\"title\":\"Fine-Tuning: Concepts & When to Use It\",\"skipped\":true},{\"day\":15,\"title\":\"Fine-Tuning: Hands-On with LoRA & QLoRA\",\"skipped\":true},{\"day\":21,\"title\":\"LangChain Agents\",\"passed\":true,\"attempts\":5},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":4},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":5},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":25,\"missionsCompleted\":27,\"missionsFirstTry\":15}},{\"member\":{\"id\":\"CAND-009\",\"name\":\"Zara Ahmadi\",\"jobRole\":\"AI Engineer\",\"yearsExperience\":1,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":1},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":13,\"title\":\"Function Calling & Structured Outputs\",\"passed\":true,\"attempts\":1},{\"day\":21,\"title\":\"LangChain Agents\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":31,\"missionsCompleted\":31,\"missionsFirstTry\":29}},{\"member\":{\"id\":\"CAND-010\",\"name\":\"Gerald Combs\",\"jobRole\":\"IT Support Specialist\",\"yearsExperience\":20,\"education\":\"AAS Information Technology\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":2},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":5},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":false,\"attempts\":4},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":false,\"attempts\":3},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":5},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":4},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":false,\"attempts\":3},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":3}],\"signals\":{\"commitDays\":22,\"missionsCompleted\":23,\"missionsFirstTry\":1}},{\"member\":{\"id\":\"CAND-011\",\"name\":\"Mia Alvarez\",\"jobRole\":\"UX Researcher\",\"yearsExperience\":6,\"education\":\"MA Human-Computer Interaction\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":2},{\"day\":2,\"title\":\"Local LLM & AI Coding Assistant Setup\",\"passed\":true,\"attempts\":1},{\"day\":3,\"title\":\"First AI Project, React Frontend & GitHub\",\"passed\":true,\"attempts\":3},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"passed\":true,\"attempts\":2},{\"day\":7,\"title\":\"Embeddings Explained\",\"skipped\":true},{\"day\":8,\"title\":\"Vector Databases Overview\",\"skipped\":true},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"skipped\":true},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"skipped\":true},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":4}],\"signals\":{\"commitDays\":9,\"missionsCompleted\":14,\"missionsFirstTry\":5}},{\"member\":{\"id\":\"CAND-012\",\"name\":\"Chen Wei\",\"jobRole\":\"Mobile App Developer\",\"yearsExperience\":7,\"education\":\"BS Computer Engineering\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":4},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":5},{\"day\":9,\"title\":\"Building & Populating the Vector Database\",\"passed\":true,\"attempts\":4},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":4},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":18,\"title\":\"Streaming Responses\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":2},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":30,\"title\":\"Production Readiness & Final Testing\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":27,\"missionsCompleted\":30,\"missionsFirstTry\":14}},{\"member\":{\"id\":\"CAND-013\",\"name\":\"Ravi Patel\",\"jobRole\":\"Software Engineer\",\"yearsExperience\":15,\"education\":\"MS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":3},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"passed\":true,\"attempts\":2},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":3},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":2},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":3},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":2},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":2},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":27,\"missionsCompleted\":30,\"missionsFirstTry\":13}},{\"member\":{\"id\":\"CAND-014\",\"name\":\"Bethany Cole\",\"jobRole\":\"HR Manager\",\"yearsExperience\":10,\"education\":\"BA Human Resources\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":4},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":5},{\"day\":8,\"title\":\"Vector Databases Overview\",\"skipped\":true},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":5},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":4},{\"day\":20,\"title\":\"Conversation Memory & Context Management\",\"passed\":true,\"attempts\":3},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"skipped\":true},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":4}],\"signals\":{\"commitDays\":17,\"missionsCompleted\":20,\"missionsFirstTry\":1}},{\"member\":{\"id\":\"CAND-015\",\"name\":\"Noah Kim\",\"jobRole\":\"Principal Architect\",\"yearsExperience\":20,\"education\":\"MS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":1},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":14,\"title\":\"Fine-Tuning: Concepts & When to Use It\",\"skipped\":true},{\"day\":15,\"title\":\"Fine-Tuning: Hands-On with LoRA & QLoRA\",\"skipped\":true},{\"day\":21,\"title\":\"LangChain Agents\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":29,\"missionsCompleted\":29,\"missionsFirstTry\":27}},{\"member\":{\"id\":\"CAND-016\",\"name\":\"Isabella Rossi\",\"jobRole\":\"Software Engineer\",\"yearsExperience\":5,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":2},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":false,\"attempts\":4},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":3},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":false,\"attempts\":5},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":2},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":false,\"attempts\":4},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"skipped\":true},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"skipped\":true},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":19,\"missionsCompleted\":21,\"missionsFirstTry\":2}},{\"member\":{\"id\":\"CAND-017\",\"name\":\"Tyler Brooks\",\"jobRole\":\"Junior Developer\",\"yearsExperience\":0,\"education\":\"GED + Coding Bootcamp Certificate\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":3},{\"day\":3,\"title\":\"First AI Project, React Frontend & GitHub\",\"passed\":true,\"attempts\":5},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":5},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":5},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":5},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":5},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":4},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":5},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":4},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":3}],\"signals\":{\"commitDays\":30,\"missionsCompleted\":31,\"missionsFirstTry\":1}},{\"member\":{\"id\":\"CAND-018\",\"name\":\"Diane Foster\",\"jobRole\":\"AI Engineer\",\"yearsExperience\":4,\"education\":\"MS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":1},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":1},{\"day\":10,\"title\":\"Retrieval & Matching Engine\",\"passed\":true,\"attempts\":1},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":13,\"title\":\"Function Calling & Structured Outputs\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":23,\"title\":\"Model Context Protocol (MCP)\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":31,\"missionsCompleted\":31,\"missionsFirstTry\":31}},{\"member\":{\"id\":\"CAND-019\",\"name\":\"Frank DeLuca\",\"jobRole\":\"Legacy Systems Engineer\",\"yearsExperience\":25,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":2},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"passed\":true,\"attempts\":1},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":true,\"attempts\":4},{\"day\":8,\"title\":\"Vector Databases Overview\",\"passed\":true,\"attempts\":3},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":17,\"title\":\"Chatbot Frontend Development\",\"passed\":true,\"attempts\":5},{\"day\":19,\"title\":\"Response Formatting & Rich Outputs\",\"passed\":true,\"attempts\":4},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":3},{\"day\":28,\"title\":\"Docker & Kubernetes Deployment\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":2}],\"signals\":{\"commitDays\":26,\"missionsCompleted\":29,\"missionsFirstTry\":11}},{\"member\":{\"id\":\"CAND-020\",\"name\":\"Priyanka Sharma\",\"jobRole\":\"Software Engineer\",\"yearsExperience\":5,\"education\":\"BS Computer Science\",\"status\":\"COMPLETED\"},\"missions\":[{\"day\":1,\"title\":\"VS Code & Python Environment Setup\",\"passed\":true,\"attempts\":1},{\"day\":3,\"title\":\"First AI Project, React Frontend & GitHub\",\"passed\":true,\"attempts\":1},{\"day\":4,\"title\":\"Reading & Processing Structured Data\",\"skipped\":true},{\"day\":7,\"title\":\"Embeddings Explained\",\"passed\":false,\"attempts\":2},{\"day\":8,\"title\":\"Vector Databases Overview\",\"skipped\":true},{\"day\":12,\"title\":\"Prompt Engineering Fundamentals\",\"passed\":true,\"attempts\":1},{\"day\":16,\"title\":\"Chatbot Backend & API Integration\",\"passed\":true,\"attempts\":1},{\"day\":22,\"title\":\"Multi-Agent Orchestration\",\"passed\":true,\"attempts\":1},{\"day\":27,\"title\":\"Security, Privacy & Guardrails\",\"passed\":true,\"attempts\":1},{\"day\":31,\"title\":\"Capstone Project & Final Demo\",\"passed\":true,\"attempts\":1}],\"signals\":{\"commitDays\":24,\"missionsCompleted\":27,\"missionsFirstTry\":19}}]}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/interview-os/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium tracking-tight transition-colors", {
    variants: {
        variant: {
            default: "border-line/10 bg-surface-raised/70 text-text-primary",
            signal: "border-signal/25 bg-signal/10 text-signal",
            pulse: "border-pulse/25 bg-pulse/10 text-pulse",
            mint: "border-mint/25 bg-mint/10 text-mint",
            danger: "border-danger/25 bg-danger/10 text-danger",
            outline: "border-line/15 bg-transparent text-text-muted"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/interview-os/components/ui/badge.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/interview-os/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/interview-os/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/interview-os/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/interview-os/components/ui/dialog.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass-strong fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl p-6 shadow-panel duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-md p-1 text-text-muted opacity-70 ring-offset-ink transition-opacity hover:opacity-100 hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/interview-os/components/ui/dialog.tsx",
                                lineNumber: 45,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/interview-os/components/ui/dialog.tsx",
                                lineNumber: 46,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/interview-os/components/ui/dialog.tsx",
                        lineNumber: 44,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/interview-os/components/ui/dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/interview-os/components/ui/dialog.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/interview-os/components/ui/dialog.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/interview-os/components/ui/dialog.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold tracking-tight text-text-primary", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/interview-os/components/ui/dialog.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-text-muted leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/interview-os/components/ui/dialog.tsx",
        lineNumber: 82,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/interview-os/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/interview-os/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$interview$2d$os$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-line/12 bg-surface/60 px-3 py-2 text-sm text-text-primary placeholder:text-text-faint transition-colors duration-200", "focus-visible:outline-none focus-visible:border-signal/50 focus-visible:ring-2 focus-visible:ring-signal/20", "disabled:cursor-not-allowed disabled:opacity-40", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/interview-os/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=interview-os_1vauj6o._.js.map