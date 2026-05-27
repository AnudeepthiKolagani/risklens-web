import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2 py-0.5 text-sm font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/5 text-slate-300",
        low: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
        moderate: "border-amber-500/40 bg-amber-500/10 text-amber-400",
        high: "border-red-500/40 bg-red-500/10 text-red-400",
        critical:
          "border-red-400/60 bg-red-500/15 text-red-300 shadow-[0_0_10px_rgba(248,113,113,0.3)]",
        info: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
        live: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
