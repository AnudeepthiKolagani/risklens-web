export type { AnalysisResult, KpiMetric, InsightItem } from "./analysis";

export type Holding = {
  id: string;
  name: string;
  sector: string;
  allocation: number;
  risk: string;
  region: string;
};

export type Scenario = {
  id: string;
  title: string;
  impact: string;
  severity: number;
  sectors: string[];
};
