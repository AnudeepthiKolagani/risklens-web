import { useCallback, useMemo, useState } from "react";

export interface UploadedFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  extension: string;
}

const ACCEPTED_EXTENSIONS = [".pdf", ".csv", ".xlsx", ".xls"];
const MAX_FILE_SIZE = 10 * 1024 * 1024;

function getId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let index = 0;

  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index += 1;
  }

  return `${value.toFixed(1)} ${units[index]}`;
}

function getFileExtension(name: string) {
  const match = name.toLowerCase().match(/\.[a-z0-9]+$/);
  return match?.[0] ?? "";
}

export function validateUploadFile(file: File) {
  const extension = getFileExtension(file.name);

  if (!ACCEPTED_EXTENSIONS.includes(extension)) {
    return `Unsupported file format: ${file.name}. Use PDF, CSV, XLSX or XLS.`;
  }

  if (file.size > MAX_FILE_SIZE) {
    return `${file.name} exceeds the 10MB size limit.`;
  }

  return "";
}

export function useFileUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const addFiles = useCallback((incomingFiles: File[]) => {
    const validFiles: UploadedFile[] = [];
    const nextErrors: string[] = [];

    incomingFiles.forEach((file) => {
      const validationMessage = validateUploadFile(file);
      if (validationMessage) {
        nextErrors.push(validationMessage);
        return;
      }

      validFiles.push({
        id: getId(),
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        extension: getFileExtension(file.name),
      });
    });

    if (validFiles.length) {
      setFiles((current) => [...current, ...validFiles]);
    }

    if (nextErrors.length) {
      setErrors((current) => [...current, ...nextErrors]);
    }
  }, []);

  const removeFile = useCallback((fileId: string) => {
    setFiles((current) => current.filter((item) => item.id !== fileId));
  }, []);

  const resetFiles = useCallback(() => {
    setFiles([]);
    setErrors([]);
  }, []);

  const clearErrors = useCallback(() => {
    setErrors([]);
  }, []);

  const hasFiles = useMemo(() => files.length > 0, [files.length]);

  const totalSize = useMemo(
    () => files.reduce((sum, file) => sum + file.size, 0),
    [files],
  );

  return {
    files,
    errors,
    addFiles,
    removeFile,
    resetFiles,
    clearErrors,
    hasFiles,
    totalSize,
  };
}
