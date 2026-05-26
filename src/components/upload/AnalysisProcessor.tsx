import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TerminalPanel } from "@/components/ui/terminal-panel";
import { ANALYSIS_PHASES } from "@/types/analysis";
import type { AnalysisPhase } from "@/types/analysis";

interface AnalysisProcessorProps {
  fileCount: number;
  isAnalyzing: boolean;
  phase: AnalysisPhase;
  onStart: () => void;
  onCancel: () => void;
}

const phaseOrder: AnalysisPhase[] = [
  "parsing",
  "extracting",
  "modeling",
  "scoring",
  "complete",
];

function phaseProgress(phase: AnalysisPhase): number {
  const idx = phaseOrder.indexOf(phase);
  if (idx <= 0) return 0;
  if (phase === "complete") return 100;
  return Math.round((idx / (phaseOrder.length - 1)) * 100);
}

export function AnalysisProcessor({
  fileCount,
  isAnalyzing,
  phase,
  onStart,
  onCancel,
}: AnalysisProcessorProps) {
  if (fileCount === 0) return null;

  const currentLabel =
    ANALYSIS_PHASES.find((p) => p.phase === phase)?.label ?? "Ready";

  return (
    <TerminalPanel title="Run analysis" ticker={isAnalyzing ? "RUN" : "RDY"}>
      <div className="space-y-3">
        <p className="text-sm text-slate-400">
          {isAnalyzing ? currentLabel : `${fileCount} file(s) ready`}
        </p>
        {!isAnalyzing && phase !== "complete" && (
          <div className="flex gap-2">
            <Button
              onClick={onStart}
              className="rounded-sm bg-cyan-400 px-4 text-sm font-semibold text-black hover:bg-cyan-500"
            >
              <Play className="mr-1.5 h-4 w-4" />
              Start analysis
            </Button>
            <Button
              variant="outline"
              onClick={onCancel}
              className="rounded-sm border-cyan-400/40 text-slate-400"
            >
              <X className="mr-1 h-4 w-4" />
              Clear
            </Button>
          </div>
        )}
        {isAnalyzing && (
          <>
            <Progress value={phaseProgress(phase)} className="h-1" />
            <ul className="space-y-1 text-xs text-slate-500">
              {ANALYSIS_PHASES.map((step) => {
                const stepIdx = phaseOrder.indexOf(step.phase);
                const currentIdx = phaseOrder.indexOf(phase);
                const done = currentIdx > stepIdx;
                const active = phase === step.phase;
                return (
                  <li
                    key={step.phase}
                    className={
                      active
                        ? "text-amber-400"
                        : done
                          ? "text-emerald-400/80"
                          : ""
                    }
                  >
                    {done ? "✓ " : active ? "› " : "  "}
                    {step.label}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </TerminalPanel>
  );
}
