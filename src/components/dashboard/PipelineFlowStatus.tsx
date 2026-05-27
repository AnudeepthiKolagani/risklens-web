import { ChevronRight } from "lucide-react";
import { ANALYSIS_PHASES } from "@/types/analysis";
import type { AnalysisPhase } from "@/types/analysis";
import { cn } from "@/lib/utils";

const FLOW_PHASES = ANALYSIS_PHASES.map((p) => p.phase);

interface PipelineFlowStatusProps {
  phase: AnalysisPhase;
  isAnalyzing: boolean;
  queueCount: number;
}

function stepState(
  stepPhase: AnalysisPhase,
  current: AnalysisPhase,
  isAnalyzing: boolean,
): "idle" | "active" | "done" {
  if (!isAnalyzing && current !== "complete") {
    if (stepPhase === current && current !== "idle") return "active";
    return "idle";
  }
  if (current === "complete") return "done";
  const stepIdx = FLOW_PHASES.indexOf(stepPhase);
  const currentIdx = FLOW_PHASES.indexOf(current);
  if (currentIdx < 0) return "idle";
  if (stepIdx < currentIdx) return "done";
  if (stepIdx === currentIdx) return "active";
  return "idle";
}

export function PipelineFlowStatus({
  phase,
  isAnalyzing,
  queueCount,
}: PipelineFlowStatusProps) {
  const stateClasses = {
    idle: "border-white/10 bg-[#0a0e14] text-slate-500",
    active:
      "border-cyan-400/60 bg-cyan-400/15 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]",
    done: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  };
  const engineLabel =
    phase === "complete"
      ? "Complete"
      : isAnalyzing
        ? "Running"
        : "Ready";

  const engineClass =
    phase === "complete"
      ? "text-emerald-400"
      : isAnalyzing
        ? "text-cyan-400"
        : "text-emerald-400";

  return (
    <div className="space-y-4">
      <ul className="space-y-2 text-sm">
        <li className="flex justify-between text-slate-400">
          <span>Queue</span>
          <span className="font-metrics text-amber-400">{queueCount}</span>
        </li>
        <li className="flex justify-between text-slate-400">
          <span>Engine</span>
          <span className={`font-medium ${engineClass}`}>{engineLabel}</span>
        </li>
      </ul>

      <div>
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-slate-400">
          Analysis flow
        </p>
        <div className="flex flex-col gap-1">
          {ANALYSIS_PHASES.map((step, index) => {
            const state = stepState(step.phase, phase, isAnalyzing);
            const shortLabel = step.label.replace(/\.\.\.$/, "");

            return (
              <div key={step.phase} className="flex flex-col items-stretch">
                <div
                  className={cn(
                    "rounded-sm border px-2 py-2 text-sm font-medium transition-colors",
                    stateClasses[state],
                  )}
                  aria-current={state === "active" ? "step" : undefined}
                >
                  <span className="font-metrics text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="ml-2">{shortLabel}</span>
                  {state === "active" && (
                    <span className="ml-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                  )}
                </div>
                {index < ANALYSIS_PHASES.length - 1 && (
                  <div
                    className="flex justify-center py-0.5 text-slate-600"
                    aria-hidden
                  >
                    <ChevronRight className="h-4 w-4 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
          {phase === "complete" && (
            <div className="mt-1 flex flex-col items-stretch">
              <div className="flex justify-center py-0.5 text-slate-600">
                <ChevronRight className="h-4 w-4 rotate-90" />
              </div>
              <div
                className={cn(
                  "rounded-sm border px-2 py-2 text-sm font-medium",
                  stateClasses.done,
                )}
              >
                Results ready
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
