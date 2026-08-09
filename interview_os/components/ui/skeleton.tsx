import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "skeleton-shimmer animate-shimmer rounded-md bg-surface-raised/50",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
