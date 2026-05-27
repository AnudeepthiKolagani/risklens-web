import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { TerminalPanel } from "@/components/ui/terminal-panel";
import { UploadDropzone } from "@/components/upload/UploadDropzone";
import { UploadedFileList } from "@/components/upload/UploadedFileList";
import { AnalysisProcessor } from "@/components/upload/AnalysisProcessor";
import { DashboardChartsPanel } from "@/components/dashboard/DashboardChartsPanel";
import { PipelineFlowStatus } from "@/components/dashboard/PipelineFlowStatus";
import { useFileUpload } from "@/hooks/useFileUpload";
import { useAnalysisStore } from "@/store/analysisStore";

export function DashboardPage() {
  const navigate = useNavigate();
  const {
    files,
    errors,
    addFiles,
    removeFile,
    resetFiles,
    clearErrors,
    hasFiles,
    totalSize,
  } = useFileUpload();

  const { phase, isAnalyzing, startAnalysis, resetAnalysis } =
    useAnalysisStore();

  useEffect(() => {
    if (phase === "complete") {
      const t = window.setTimeout(() => navigate("/analysis"), 400);
      return () => window.clearTimeout(t);
    }
  }, [phase, navigate]);

  return (
    <TerminalLayout
      title="Upload Center"
      subtitle="Document ingest · Risk intelligence"
      fileCount={files.length}
      totalSize={totalSize}
    >
      <section className="space-y-3">
        <p className=" text-cyan-400">Document ingest</p>
        <div className="grid gap-3 xl:grid-cols-12 mt-3">
          <div className="space-y-3 xl:col-span-9">
            <TerminalPanel
              title="Upload files"
              subtitle="PDF · DOCX · XLSX · CSV · Images"
            >
              <UploadDropzone
                onFilesAccepted={(incoming) => {
                  clearErrors();
                  addFiles(incoming);
                }}
                onUploadError={() => clearErrors()}
                error={errors.length ? errors.join(" · ") : undefined}
              />
            </TerminalPanel>
            {files.length > 0 && (
              <UploadedFileList files={files} onRemove={removeFile} />
            )}
            <AnalysisProcessor
              fileCount={files.length}
              isAnalyzing={isAnalyzing}
              phase={phase}
              onStart={() => hasFiles && void startAnalysis(files.length)}
              onCancel={() => {
                resetFiles();
                resetAnalysis();
              }}
            />
          </div>
          <TerminalPanel
            title="Session"
            subtitle="Pipeline status"
            className="xl:col-span-3"
          >
            <PipelineFlowStatus
              phase={phase}
              isAnalyzing={isAnalyzing}
              queueCount={files.length}
            />
          </TerminalPanel>
        </div>
      </section>

      <DashboardChartsPanel />
    </TerminalLayout>
  );
}
