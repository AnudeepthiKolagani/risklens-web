import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";

interface NavbarProps {
  fileCount: number;
  totalSize: number;
}

export function Navbar({ fileCount, totalSize }: NavbarProps) {
  return (
    <div className="sticky top-6 z-20 rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-3xl">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Dashboard overview
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">
            AI Portfolio Command Center
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            A premium AI workspace for upload-driven risk analysis, workflow
            orchestration, and institutional portfolio insight.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200 shadow-inner shadow-slate-950/40">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Files ready
              </p>
              <p className="mt-1 text-base font-semibold text-white">
                {fileCount} files ·{" "}
                {totalSize === 0
                  ? "0 B"
                  : `${(totalSize / 1024).toFixed(1)} KB`}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white/10 bg-white/5 text-slate-100 shadow-none hover:bg-white/10"
          >
            Portfolio insights
          </Button>
        </div>
      </div>
    </div>
  );
}
