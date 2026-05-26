import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisTick, CHART_COLORS, tooltipStyle } from "@/utils/chartTheme";

interface Point {
  date: string;
  events: number;
  risk: number;
}

export function TimelineChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
        <XAxis
          dataKey="date"
          tick={axisTick}
          axisLine={false}
          tickLine={false}
        />
        <YAxis tick={axisTick} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Line
          type="monotone"
          dataKey="risk"
          stroke={CHART_COLORS.primary}
          strokeWidth={2}
          dot={{ r: 2, fill: CHART_COLORS.primary }}
        />
        <Line
          type="monotone"
          dataKey="events"
          stroke={CHART_COLORS.secondary}
          strokeWidth={2}
          dot={{ r: 2, fill: CHART_COLORS.secondary }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
