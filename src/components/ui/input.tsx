import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-8 w-full rounded-sm border border-white/[0.1] bg-[#0a0c12] px-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";
