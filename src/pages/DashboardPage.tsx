import { motion } from "framer-motion";
import { useState } from "react";
import { ShieldCheck, TrendingUp } from "lucide-react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { UploadDropzone } from "../components/dashboard/UploadDropzone";
// import { UploadedFileCard } from "../components/dashboard/UploadedFileCard";
import { AnalysisPromptCard } from "../components/dashboard/AnalysisPromptCard";
import { useFileUpload } from "../hooks/useFileUpload";

export function DashboardPage() {
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

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleStartAnalysis = () => {
    if (!hasFiles) return;

    setIsAnalyzing(true);
    window.setTimeout(() => {
      setIsAnalyzing(false);
    }, 1800);
  };

  const handleCancel = () => {
    resetFiles();
  };

  return (
    <DashboardLayout fileCount={files.length} totalSize={totalSize}>
      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-3xl"
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Upload workspace
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Drag your portfolio files into the AI engine.
              </h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 shadow-inner shadow-white/5">
              {hasFiles ? `${files.length} files uploaded` : "No files yet"}
            </div>
          </div>

          <UploadDropzone
            onFilesAccepted={(incomingFiles) => {
              setUploadError("");
              clearErrors();
              addFiles(incomingFiles);
            }}
            onUploadError={(message) => {
              clearErrors();
              setUploadError(message);
            }}
            error={
              uploadError || (errors.length ? errors.join(" \n") : undefined)
            }
          />

          {/* {files.length > 0 ? (
            <div className="mt-6 space-y-4">
              {files.map((file) => (
                <UploadedFileCard
                  key={file.id}
                  file={file}
                  onRemove={removeFile}
                />
              ))}
            </div>
          ) : null} */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="space-y-6"
        >
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-3xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                  Portfolio pulse
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Scenario readiness stack
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 rounded-3xl bg-white/5 px-3 py-2 text-sm text-slate-200">
                <TrendingUp className="h-4 w-4 text-cyan-300" />
                Real-time
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  Live exposure
                </p>
                <p className="mt-3 text-3xl font-semibold">72%</p>
                <p className="mt-2 text-sm text-slate-400">
                  Active portfolio sensitivity across assets.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-5 text-white">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                  AI confidence
                </p>
                <p className="mt-3 text-3xl font-semibold">91%</p>
                <p className="mt-2 text-sm text-slate-400">
                  Confidence in coverage and risk signal quality.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-3xl">
            <div className="flex items-center gap-3 text-slate-200">
              <ShieldCheck className="h-5 w-5 text-cyan-300" />
              <p className="text-sm font-medium">
                Institutional data governance
              </p>
            </div>
            <div className="mt-5 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300">
                <p className="font-medium text-slate-100">Secure ingest</p>
                <p className="mt-2">
                  Files are validated and stored in encrypted boundaries.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300">
                <p className="font-medium text-slate-100">Audit-ready</p>
                <p className="mt-2">
                  Each upload generates a traceable risk review workflow.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <AnalysisPromptCard
        fileCount={files.length}
        isLoading={isAnalyzing}
        onStart={handleStartAnalysis}
        onCancel={handleCancel}
      />
    </DashboardLayout>
  );
}
