export type RiskLevel = "low" | "moderate" | "high" | "critical" | "info";

/** Hex fills for charts — Bloomberg-style risk semantics */
export const RISK_FILL = {
  low: "#22c55e",
  moderate: "#f59e0b",
  high: "#ef4444",
  critical: "#dc2626",
  info: "#38bdf8",
} as const;

export const RISK_CHART_SERIES = [
  RISK_FILL.high,
  RISK_FILL.moderate,
  RISK_FILL.low,
  RISK_FILL.info,
  "#fb923c",
  "#a855f7",
];

export const RISK_COLORS: Record<
  RiskLevel,
  { text: string; bg: string; border: string; fill: string }
> = {
  low: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/15",
    border: "border-emerald-500/50",
    fill: RISK_FILL.low,
  },
  moderate: {
    text: "text-amber-400",
    bg: "bg-amber-500/15",
    border: "border-amber-500/50",
    fill: RISK_FILL.moderate,
  },
  high: {
    text: "text-red-400",
    bg: "bg-red-500/15",
    border: "border-red-500/50",
    fill: RISK_FILL.high,
  },
  critical: {
    text: "text-red-300",
    bg: "bg-red-500/20",
    border: "border-red-400/70",
    fill: RISK_FILL.critical,
  },
  info: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/15",
    border: "border-cyan-500/50",
    fill: RISK_FILL.info,
  },
};

export function getRiskLevel(score: number): RiskLevel {
  if (score >= 80) return "critical";
  if (score >= 60) return "high";
  if (score >= 40) return "moderate";
  if (score >= 20) return "low";
  return "info";
}

export function getRiskLevelInverted(score: number): RiskLevel {
  if (score >= 80) return "low";
  if (score >= 60) return "moderate";
  if (score >= 40) return "high";
  return "critical";
}

/** Higher score = healthier (green) */
export function healthScoreFill(score: number): string {
  if (score >= 80) return RISK_FILL.low;
  if (score >= 60) return RISK_FILL.moderate;
  return RISK_FILL.high;
}

/** Higher score = riskier (red) */
export function exposureRiskFill(value: number): string {
  if (value >= 30) return RISK_FILL.high;
  if (value >= 18) return RISK_FILL.moderate;
  return RISK_FILL.low;
}
