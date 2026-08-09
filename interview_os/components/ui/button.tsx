import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-tight transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-signal text-white shadow-[0_1px_0_0_hsl(var(--signal)/0.4)_inset,0_8px_20px_-8px_hsl(var(--signal)/0.6)] hover:brightness-110 active:brightness-95",
        secondary:
          "glass text-text-primary hover:border-line/20 hover:bg-surface-raised/60",
        outline:
          "border border-line/15 bg-transparent text-text-primary hover:bg-surface-raised/50 hover:border-line/25",
        ghost:
          "text-text-muted hover:text-text-primary hover:bg-surface-raised/50",
        destructive:
          "bg-danger/90 text-white hover:bg-danger shadow-[0_8px_20px_-8px_hsl(var(--danger)/0.6)]",
        link: "text-signal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onPointerMove, onPointerLeave, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "[transform:translate3d(var(--magnetic-x,0),var(--magnetic-y,0),0)] hover:shadow-[0_10px_26px_-14px_hsl(var(--signal)/0.75)]")}
        ref={ref}
        onPointerMove={(event) => { if (window.matchMedia("(hover: hover)").matches) { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--magnetic-x", `${(event.clientX - rect.left - rect.width / 2) * 0.05}px`); event.currentTarget.style.setProperty("--magnetic-y", `${(event.clientY - rect.top - rect.height / 2) * 0.05}px`); } onPointerMove?.(event); }}
        onPointerLeave={(event) => { event.currentTarget.style.setProperty("--magnetic-x", "0px"); event.currentTarget.style.setProperty("--magnetic-y", "0px"); onPointerLeave?.(event); }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
