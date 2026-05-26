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

export const tooltipStyle = {
  background: "#0c1018",
  border: "1px solid rgba(255,153,0,0.25)",
  borderRadius: 2,
  fontSize: 11,
  fontFamily: CHART_FONT,
  color: "#e2e8f0",
};

export const axisTick = {
  fill: "#94a3b8",
  fontSize: 10,
  fontFamily: CHART_FONT,
};

export const legendStyle = {
  fontSize: 10,
  fontFamily: CHART_FONT,
  color: "#94a3b8",
};
