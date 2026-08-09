"use client";

import { cn } from "@/lib/utils";

interface SignalBarsProps {
  className?: string;
  barClassName?: string;
  count?: number;
  active?: boolean;
}

/**
 * SignalBars — the product's signature motif.
 * A row of bars that idle in a gentle bounce, evoking a live audio/answer
 * signal being read by the system. Used in hero and status moments across
 * the app to reinforce "a live technical conversation is being measured."
 */
export function SignalBars({
  className,
  barClassName,
  count = 9,
  active = true,
}: SignalBarsProps) {
  const bars = Array.from({ length: count });

  return (
    <div
      className={cn("flex items-center gap-[3px]", className)}
      role="img"
      aria-label="Live signal visualization"
    >
      {bars.map((_, i) => {
        const delay = (i % 5) * 0.12;
        const heightScale = 0.35 + ((i * 37) % 60) / 100;
        return (
          <span
            key={i}
            style={{
              animationDelay: `${delay}s`,
              height: `${Math.max(18, heightScale * 100)}%`,
            }}
            className={cn(
              "w-[3px] rounded-full bg-gradient-to-t from-signal to-pulse",
              active && "animate-bar-bounce",
              barClassName
            )}
          />
        );
      })}
    </div>
  );
}
