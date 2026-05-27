import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { axisTick, CHART_COLORS, chartCursor, legendStyle } from "@/utils/chartTheme";

interface Point {
  layer: string;
  low: number;
  medium: number;
  high: number;
}

export function RiskStackedBarChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="2 2" stroke="rgba(255,255,255,0.06)" vertical={false} />
        <XAxis dataKey="layer" tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis tick={axisTick} axisLine={false} tickLine={false} />
        <Tooltip
          content={<ChartTooltip />}
          cursor={chartCursor}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend wrapperStyle={legendStyle} />
        <Bar dataKey="low" stackId="a" fill="#475569" name="Low" />
        <Bar dataKey="medium" stackId="a" fill="#64748b" name="Medium" />
        <Bar dataKey="high" stackId="a" fill="#94a3b8" name="High" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
