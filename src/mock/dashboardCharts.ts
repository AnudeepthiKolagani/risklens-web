import { exposureRiskFill, RISK_FILL } from "@/utils/risk";

export const sectorExposure = [
  { sector: "Technology", exposure: 32, fill: exposureRiskFill(32) },
  { sector: "Financials", exposure: 24, fill: exposureRiskFill(24) },
  { sector: "Healthcare", exposure: 18, fill: exposureRiskFill(18) },
  { sector: "Energy", exposure: 14, fill: exposureRiskFill(14) },
  { sector: "Consumer", exposure: 12, fill: exposureRiskFill(12) },
];

export const riskMixPie = [
  { name: "Low", value: 38, fill: RISK_FILL.low },
  { name: "Moderate", value: 34, fill: RISK_FILL.moderate },
  { name: "High", value: 22, fill: RISK_FILL.high },
  { name: "Critical", value: 6, fill: RISK_FILL.critical },
];

/** Portfolio risk index over time — line chart */
export const portfolioRiskTrend = [
  { period: "W1", riskIndex: 52, benchmark: 48 },
  { period: "W2", riskIndex: 55, benchmark: 49 },
  { period: "W3", riskIndex: 54, benchmark: 50 },
  { period: "W4", riskIndex: 58, benchmark: 51 },
  { period: "W5", riskIndex: 56, benchmark: 52 },
  { period: "W6", riskIndex: 61, benchmark: 53 },
  { period: "W7", riskIndex: 58, benchmark: 52 },
];
