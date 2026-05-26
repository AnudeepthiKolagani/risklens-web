import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalysisStore } from "@/store/analysisStore";

export function useAnalysisPipeline() {
  const navigate = useNavigate();
  const { startAnalysis, phase, isAnalyzing, result, resetAnalysis } =
    useAnalysisStore();

  const run = useCallback(
    async (documentCount: number) => {
      await startAnalysis(documentCount);
      navigate("/analysis");
    },
    [startAnalysis, navigate],
  );

  return { run, phase, isAnalyzing, result, resetAnalysis };
}
