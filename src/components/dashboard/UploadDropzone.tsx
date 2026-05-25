import { useCallback } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { DownloadCloud, FilePlus } from "lucide-react";
import { Button } from "../ui/button";
import { validateUploadFile } from "../../hooks/useFileUpload";

interface UploadDropzoneProps {
  onFilesAccepted: (files: File[]) => void;
  onUploadError: (message: string) => void;
  error?: string;
}

const ACCEPTED_FILE_TYPES = {
  "application/pdf": [".pdf"],
  "text/csv": [".csv"],
  "application/vnd.ms-excel": [".xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
    ".xlsx",
  ],
};

export function UploadDropzone({
  onFilesAccepted,
  onUploadError,
  error,
}: UploadDropzoneProps) {
  const handleDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const validationErrors = rejectedFiles
        .map((rejectedFile) =>
          rejectedFile.errors.map((errorItem) => errorItem.message).join(", "),
        )
        .filter(Boolean);

      if (validationErrors.length) {
        onUploadError(validationErrors.join(" \n"));
      }

      if (acceptedFiles.length) {
        onFilesAccepted(acceptedFiles);
      }
    },
    [onFilesAccepted, onUploadError],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    accept: ACCEPTED_FILE_TYPES,
    maxSize: 10 * 1024 * 1024,
    validator: (file) => {
      const message = validateUploadFile(file);
      if (message) {
        return { code: "file-invalid", message };
      }
      return null;
    },
    onDrop: handleDrop,
    onDropRejected: (rejectedFiles) => handleDrop([], rejectedFiles),
  });

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-3xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-slate-900/80">
      <div
        {...getRootProps()}
        className={`group relative cursor-pointer rounded-[1.75rem] border-2 px-6 py-14 text-center transition-all duration-200 ${
          isDragActive
            ? "border-cyan-300/60 bg-cyan-400/10 shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
            : "border-dashed border-white/10 bg-slate-900/80 hover:border-cyan-300/40"
        }`}
      >
        <input {...getInputProps()} />
        <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300 shadow-[0_25px_60px_-40px_rgba(34,211,238,0.9)] transition-all duration-200 group-hover:scale-[1.03]">
            <DownloadCloud className="h-8 w-8" />
          </div>
          <div>
            <p className="text-xl font-semibold text-white">
              Drag & drop your files
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Upload portfolio files, statements, or scenario sheets.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              type="button"
              variant="secondary"
              className="rounded-full border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-100 shadow-none hover:bg-white/10"
            >
              Browse files
            </Button>
            <span className="text-sm text-slate-400">
              PDF, CSV, XLSX, XLS · max 10MB each
            </span>
          </div>
        </div>
      </div>

      {error ? (
        <div className="mt-4 rounded-3xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
          {error}
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-500">
        <FilePlus className="h-4 w-4 text-cyan-300" />
        <span>Secure uploads · enterprise-first risk readiness</span>
      </div>
    </div>
  );
}
