import { createMockAnalysis } from "@/mock/analysisData";
import type { AnalysisResult } from "@/types/analysis";

/** Placeholder for future API integration — preserves mock pipeline today */
export async function runAnalysis(
  documentCount: number,
): Promise<AnalysisResult> {
  await new Promise((r) => setTimeout(r, 3800));
  return createMockAnalysis(documentCount);
}
