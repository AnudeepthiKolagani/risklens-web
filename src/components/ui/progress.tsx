import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  className?: string;
  indicatorClassName?: string;
}

export function Progress({
  value,
  className,
  indicatorClassName,
}: ProgressProps) {
  return (
    <div
      className={cn(
        "h-1 w-full overflow-hidden rounded-sm bg-white/[0.06]",
        className,
      )}
    >
      <div
        className={cn(
          "h-full rounded-sm bg-[#ff9900] transition-all duration-300",
          indicatorClassName,
        )}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
