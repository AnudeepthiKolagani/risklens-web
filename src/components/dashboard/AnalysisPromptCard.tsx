import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Loader2, Sparkles } from "lucide-react";

interface AnalysisPromptCardProps {
  fileCount: number;
  isLoading: boolean;
  onStart: () => void;
  onCancel: () => void;
}

export function AnalysisPromptCard({
  fileCount,
  isLoading,
  onStart,
  onCancel,
}: AnalysisPromptCardProps) {
  if (fileCount === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2rem] border border-dashed border-white/15 bg-slate-950/70 p-8 text-center shadow-xl shadow-black/20 backdrop-blur-3xl"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-cyan-300 shadow-lg shadow-cyan-300/10">
          <Sparkles className="h-7 w-7" />
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-white">
          Upload portfolio files to begin AI-powered analysis.
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Select your source documents and watch RiskLens convert the data into
          premium intelligence, risk scenarios, and portfolio exposure insights.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[2rem] border border-cyan-300/10 bg-slate-950/75 p-8 shadow-2xl shadow-black/30 backdrop-blur-3xl"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Ready to analyze
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Ready to start portfolio analysis?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
            Once your files are uploaded, RiskLens will validate the inputs and
            create a premium, audit-ready analysis pipeline.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={onStart}
            disabled={isLoading}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-950 transition ${
              isLoading
                ? "bg-cyan-300/80 text-slate-950 shadow-[0_0_0_10px_rgba(56,189,248,0.12)]"
                : "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Starting analysis
              </>
            ) : (
              "Start Analysis"
            )}
          </Button>
          <Button
            variant="outline"
            onClick={onCancel}
            className="rounded-full border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-100 shadow-none hover:bg-white/10"
          >
            Cancel
          </Button>
        </div>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-900/70 p-4 text-sm text-slate-300 shadow-inner shadow-slate-950/20">
          <p className="font-medium text-white">Files queued</p>
          <p className="mt-2">
            {fileCount} uploaded documents are ready for processing.
          </p>
        </div>
        <div className="rounded-3xl bg-slate-900/70 p-4 text-sm text-slate-300 shadow-inner shadow-slate-950/20">
          <p className="font-medium text-white">AI confidence</p>
          <p className="mt-2">
            Models will infer exposure, stress, and concentration metrics.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
