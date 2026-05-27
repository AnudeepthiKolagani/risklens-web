import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { CHART_FONT } from "@/utils/chartTheme";

interface Point {
  metric: string;
  value: number;
  fullMark: number;
}

export function RadarRiskChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadarChart data={data}>
        <PolarGrid stroke="rgba(255,255,255,0.1)" />
        <PolarAngleAxis
          dataKey="metric"
          tick={{ fill: "#94a3b8", fontSize: 10, fontFamily: CHART_FONT }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          tick={{ fill: "#64748b", fontSize: 9, fontFamily: CHART_FONT }}
        />
        <Radar
          name="Score"
          dataKey="value"
          stroke="#64748b"
          fill="#64748b"
          fillOpacity={0.15}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
