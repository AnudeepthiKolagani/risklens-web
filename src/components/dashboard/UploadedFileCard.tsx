import { motion } from "framer-motion";
import { CheckCircle2, FileText, Trash2 } from "lucide-react";
import { UploadedFile, formatBytes } from "../../hooks/useFileUpload";

interface UploadedFileCardProps {
  file: UploadedFile;
  onRemove: (id: string) => void;
}

export function UploadedFileCard({ file, onRemove }: UploadedFileCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      className="group relative rounded-[1.75rem] border border-white/10 bg-slate-950/75 p-4 shadow-xl shadow-black/20 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/90"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-cyan-300 shadow-inner shadow-cyan-500/10">
          <FileText className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-semibold text-white">
            {file.name}
          </p>
          <p className="mt-1 text-sm text-slate-400">
            {formatBytes(file.size)} ·{" "}
            {file.extension.toUpperCase().replace(".", "")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-400" />
          <button
            type="button"
            onClick={() => onRemove(file.id)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-rose-400/30 hover:bg-rose-500/10 hover:text-rose-300"
            aria-label={`Remove ${file.name}`}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
