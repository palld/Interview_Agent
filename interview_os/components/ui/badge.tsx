import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium tracking-tight transition-colors",
  {
    variants: {
      variant: {
        default: "border-line/10 bg-surface-raised/70 text-text-primary",
        signal: "border-signal/25 bg-signal/10 text-signal",
        pulse: "border-pulse/25 bg-pulse/10 text-pulse",
        mint: "border-mint/25 bg-mint/10 text-mint",
        danger: "border-danger/25 bg-danger/10 text-danger",
        outline: "border-line/15 bg-transparent text-text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
