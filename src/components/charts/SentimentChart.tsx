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
import { axisTick, chartCursor, legendStyle } from "@/utils/chartTheme";

interface Point {
  label: string;
  positive: number;
  neutral: number;
  negative: number;
}

export function SentimentChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="2 2" />
        <XAxis
          dataKey="label"
          tick={axisTick}
          axisLine={false}
          tickLine={false}
        />
        <YAxis tick={axisTick} axisLine={false} tickLine={false} />
        <Tooltip
          content={<ChartTooltip />}
          cursor={chartCursor}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend wrapperStyle={legendStyle} />
        <Bar dataKey="positive" stackId="a" fill="#64748b" />
        <Bar dataKey="neutral" stackId="a" fill="#475569" />
        <Bar dataKey="negative" stackId="a" fill="#334155" />
      </BarChart>
    </ResponsiveContainer>
  );
}
