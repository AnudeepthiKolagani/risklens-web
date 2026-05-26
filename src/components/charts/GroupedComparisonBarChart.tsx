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
import { axisTick, CHART_COLORS, legendStyle, tooltipStyle } from "@/utils/chartTheme";

interface Point {
  day: string;
  files: number;
  processed: number;
}

export function GroupedComparisonBarChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="2 2" stroke="rgba(255,255,255,0.06)" vertical={false} />
        <XAxis dataKey="day" tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis tick={axisTick} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={legendStyle} />
        <Bar dataKey="files" fill={CHART_COLORS.cyan} name="Uploaded" radius={[2, 2, 0, 0]} barSize={14} />
        <Bar dataKey="processed" fill={CHART_COLORS.emerald} name="Processed" radius={[2, 2, 0, 0]} barSize={14} />
      </BarChart>
    </ResponsiveContainer>
  );
}
