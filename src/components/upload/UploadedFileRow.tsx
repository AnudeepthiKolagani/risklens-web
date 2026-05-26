import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileImage,
  FileSpreadsheet,
  FileText,
  Loader2,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { UploadedFile } from "@/hooks/useFileUpload";
import { formatBytes } from "@/hooks/useFileUpload";
import { Progress } from "@/components/ui/progress";

function FileTypeIcon({ extension }: { extension: string }) {
  if ([".png", ".jpg", ".jpeg", ".webp"].includes(extension)) {
    return <FileImage className="h-4 w-4" />;
  }
  if ([".csv", ".xlsx", ".xls"].includes(extension)) {
    return <FileSpreadsheet className="h-4 w-4" />;
  }
  return <FileText className="h-4 w-4" />;
}

interface UploadedFileRowProps {
  file: UploadedFile;
  onRemove: (id: string) => void;
}

export function UploadedFileRow({ file, onRemove }: UploadedFileRowProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"uploading" | "complete">("uploading");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          window.clearInterval(interval);
          setStatus("complete");
          return 100;
        }
        return p + 18 + Math.random() * 12;
      });
    }, 120);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.li
      layout
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      className="flex items-center gap-3 px-3 py-2 hover:bg-white/[0.02]"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/[0.06] bg-slate-800/50 text-slate-400">
        <FileTypeIcon extension={file.extension} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-xs font-medium text-slate-200">
            {file.name}
          </p>
          <span className="shrink-0 text-xs text-slate-500">
            {formatBytes(file.size)}
          </span>
        </div>
        {status === "uploading" ? (
          <Progress value={progress} className="mt-1.5 h-0.5" />
        ) : (
          <p className="mt-0.5 text-xs text-slate-500">Ready</p>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-1">
        {status === "uploading" ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin text-slate-500" />
        ) : (
          <CheckCircle2 className="h-3.5 w-3.5 text-slate-500" />
        )}
        <button
          type="button"
          onClick={() => onRemove(file.id)}
          className="flex h-7 w-7 items-center justify-center rounded-sm text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
          aria-label={`Remove ${file.name}`}
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.li>
  );
}
