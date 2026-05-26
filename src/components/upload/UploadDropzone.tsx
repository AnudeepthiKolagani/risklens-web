import { useCallback } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { FileUp, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { validateUploadFile } from "@/hooks/useFileUpload";

interface UploadDropzoneProps {
  onFilesAccepted: (files: File[]) => void;
  onUploadError: (message: string) => void;
  error?: string;
}

const ACCEPTED_FILE_TYPES = {
  "application/pdf": [".pdf"],
  "text/csv": [".csv"],
  "application/vnd.ms-excel": [".xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
  "application/msword": [".doc"],
  "image/png": [".png"],
  "image/jpeg": [".jpg", ".jpeg"],
  "image/webp": [".webp"],
};

export function UploadDropzone({
  onFilesAccepted,
  onUploadError,
  error,
}: UploadDropzoneProps) {
  const handleDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const validationErrors = rejectedFiles
        .map((r) => r.errors.map((e) => e.message).join(", "))
        .filter(Boolean);
      if (validationErrors.length) onUploadError(validationErrors.join(" \n"));
      if (acceptedFiles.length) onFilesAccepted(acceptedFiles);
    },
    [onFilesAccepted, onUploadError],
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    multiple: true,
    accept: ACCEPTED_FILE_TYPES,
    maxSize: 10 * 1024 * 1024,
    noClick: true,
    validator: (file) => {
      const message = validateUploadFile(file);
      return message ? { code: "file-invalid", message } : null;
    },
    onDrop: handleDrop,
    onDropRejected: (rejected) => handleDrop([], rejected),
  });

  return (
    <div
      {...getRootProps()}
      className={`cursor-pointer rounded-sm border-2 border-dashed px-6 py-10 text-center transition-colors ${
        isDragActive
          ? "border-amber-500/50 bg-amber-500/5"
          : "border-white/10 bg-black/20 hover:border-white/20"
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-8 w-8 text-slate-500" />
      <p className="mt-3 text-sm font-medium text-slate-200">
        {isDragActive ? "Release to upload" : "Drop files here"}
      </p>
      <p className="mt-1 text-xs text-slate-500">PDF · DOCX · XLSX · CSV · Images</p>
      <Button
        type="button"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          open();
        }}
        className="mt-4 rounded-sm border border-[#ff9900]/40 bg-[#ff9900]/10 text-xs font-semibold uppercase tracking-wider text-[#ff9900] hover:bg-[#ff9900]/20"
      >
        <FileUp className="mr-1.5 h-3.5 w-3.5" />
        Browse
      </Button>
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
    </div>
  );
}
