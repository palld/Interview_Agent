"use client";

import { cn } from "@/lib/utils";

interface StatusReadoutProps {
  label: string;
  className?: string;
  tone?: "signal" | "pulse" | "mint";
}

const toneMap = {
  signal: "bg-signal shadow-[0_0_12px_2px_hsl(var(--signal)/0.6)]",
  pulse: "bg-pulse shadow-[0_0_12px_2px_hsl(var(--pulse)/0.6)]",
  mint: "bg-mint shadow-[0_0_12px_2px_hsl(var(--mint)/0.6)]",
};

/**
 * StatusReadout — a small terminal-style line used across the app to
 * surface system state ("SESSION ARMED", "MODEL READY"). Pairs with
 * SignalBars as the two recurring signature devices of InterviewOS.
 */
export function StatusReadout({
  label,
  className,
  tone = "signal",
}: StatusReadoutProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted",
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-pulse-ring rounded-full",
            toneMap[tone]
          )}
        />
        <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", toneMap[tone])} />
      </span>
      {label}
      <span className="animate-pulse text-text-faint">_</span>
    </div>
  );
}
