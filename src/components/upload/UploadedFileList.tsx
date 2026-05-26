import { AnimatePresence } from "framer-motion";
import { TerminalPanel } from "@/components/ui/terminal-panel";
import type { UploadedFile } from "@/hooks/useFileUpload";
import { UploadedFileRow } from "./UploadedFileRow";

interface UploadedFileListProps {
  files: UploadedFile[];
  onRemove: (id: string) => void;
}

export function UploadedFileList({ files, onRemove }: UploadedFileListProps) {
  return (
    <TerminalPanel
      title="Ingest queue"
      ticker={`${files.length} FILES`}
      bodyClassName="p-0 divide-y divide-white/[0.06]"
    >
      <ul className="max-h-48 overflow-y-auto">
        <AnimatePresence initial={false}>
          {files.map((file) => (
            <UploadedFileRow key={file.id} file={file} onRemove={onRemove} />
          ))}
        </AnimatePresence>
      </ul>
    </TerminalPanel>
  );
}
