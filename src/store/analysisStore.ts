import { create } from "zustand";
import { createMockAnalysis } from "../mock/analysisData";
import type { AnalysisPhase, AnalysisResult } from "../types/analysis";

interface AnalysisState {
  phase: AnalysisPhase;
  result: AnalysisResult | null;
  isAnalyzing: boolean;
  startAnalysis: (documentCount: number) => Promise<void>;
  resetAnalysis: () => void;
}

const PHASE_DELAYS: Record<Exclude<AnalysisPhase, "idle" | "complete">, number> = {
  parsing: 900,
  extracting: 1100,
  modeling: 1000,
  scoring: 800,
};

export const useAnalysisStore = create<AnalysisState>((set) => ({
  phase: "idle",
  result: null,
  isAnalyzing: false,

  startAnalysis: async (documentCount: number) => {
    set({ isAnalyzing: true, phase: "parsing", result: null });

    const phases: Exclude<AnalysisPhase, "idle" | "complete">[] = [
      "parsing",
      "extracting",
      "modeling",
      "scoring",
    ];

    for (const phase of phases) {
      set({ phase });
      await new Promise((r) => setTimeout(r, PHASE_DELAYS[phase]));
    }

    set({
      phase: "complete",
      isAnalyzing: false,
      result: createMockAnalysis(documentCount),
    });
  },

  resetAnalysis: () =>
    set({ phase: "idle", result: null, isAnalyzing: false }),
}));
