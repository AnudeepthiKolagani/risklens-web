import { RISK_FILL } from "./risk";

export const CHART_FONT = "'Geist Variable', 'Geist', system-ui, sans-serif";

export const BLOOMBERG = {
  orange: "#ff9900",
  panelBg: "#060a10",
  headerBg: "#0c1018",
  grid: "rgba(255,255,255,0.06)",
};

export const CHART_COLORS = {
  ...RISK_FILL,
  grid: BLOOMBERG.grid,
  line: RISK_FILL.info,
};

/** Recharts bar/area hover band — avoid white wash */
export const chartCursor = {
  fill: "rgba(34, 211, 238, 0.06)",
  stroke: "rgba(34, 211, 238, 0.25)",
  strokeWidth: 1,
};

export const tooltipWrapperStyle = {
  background: "#0a1018",
  border: "1px solid rgba(34, 211, 238, 0.45)",
  borderRadius: 2,
  padding: "8px 10px",
  fontSize: 13,
  fontFamily: CHART_FONT,
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.55)",
  outline: "none",
};

export const tooltipLabelStyle = {
  margin: 0,
  fontSize: 12,
  fontWeight: 600,
  color: "#22d3ee",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

export const tooltipItemStyle = {
  margin: 0,
  fontSize: 13,
  color: "#f1f5f9",
  fontFamily: CHART_FONT,
};

/** @deprecated Use ChartTooltip component */
export const tooltipStyle = {
  background: "#0a1018",
  border: "1px solid rgba(34, 211, 238, 0.45)",
  borderRadius: 2,
  fontSize: 13,
  fontFamily: CHART_FONT,
  color: "#f1f5f9",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.55)",
};

export const axisTick = {
  fill: "#94a3b8",
  fontSize: 12,
  fontFamily: CHART_FONT,
};

export const legendStyle = {
  fontSize: 12,
  fontFamily: CHART_FONT,
  color: "#94a3b8",
};
