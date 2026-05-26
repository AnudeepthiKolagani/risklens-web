import type { RiskLevel } from "../utils/risk";

export interface KpiMetric {
  id: string;
  label: string;
  value: number;
  unit: "%" | "pts" | "";
  trend: number;
  level: RiskLevel;
  sparkline: number[];
}

export interface RiskCategory {
  name: string;
  value: number;
  level: RiskLevel;
}

export interface InsightItem {
  id: string;
  title: string;
  body: string;
  severity: RiskLevel;
  category: string;
  confidence: number;
}

export interface AnomalyItem {
  id: string;
  field: string;
  description: string;
  severity: RiskLevel;
}

export interface AnalysisResult {
  generatedAt: string;
  documentCount: number;
  kpis: KpiMetric[];
  riskDistribution: { name: string; value: number; fill: string }[];
  confidenceGauge: number;
  financialTrend: { period: string; revenue: number; risk: number }[];
  heatmapMatrix: { x: string; y: string; value: number }[];
  categoryBreakdown: { category: string; score: number }[];
  timeline: { date: string; events: number; risk: number }[];
  sentiment: { label: string; positive: number; neutral: number; negative: number }[];
  radarMetrics: { metric: string; value: number; fullMark: number }[];
  insights: InsightItem[];
  anomalies: AnomalyItem[];
  recommendations: string[];
  summary: string;
}

export type AnalysisPhase =
  | "idle"
  | "parsing"
  | "extracting"
  | "modeling"
  | "scoring"
  | "complete";

export const ANALYSIS_PHASES: { phase: AnalysisPhase; label: string }[] = [
  { phase: "parsing", label: "Parsing Documents..." },
  { phase: "extracting", label: "Extracting Insights..." },
  { phase: "modeling", label: "Running Risk Models..." },
  { phase: "scoring", label: "Calculating Confidence Scores..." },
];
