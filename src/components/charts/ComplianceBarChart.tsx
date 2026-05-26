import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisTick, CHART_COLORS, tooltipStyle } from "@/utils/chartTheme";

interface Point {
  metric: string;
  score: number;
}

function barColor(score: number) {
  if (score >= 90) return CHART_COLORS.emerald;
  if (score >= 80) return CHART_COLORS.cyan;
  if (score >= 70) return CHART_COLORS.amber;
  return CHART_COLORS.red;
}

export function ComplianceBarChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} layout="vertical" margin={{ left: 4, right: 16 }}>
        <CartesianGrid strokeDasharray="2 2" stroke="rgba(255,255,255,0.06)" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis
          type="category"
          dataKey="metric"
          width={52}
          tick={axisTick}
          axisLine={false}
          tickLine={false}
        />
        <ReferenceLine x={80} stroke={CHART_COLORS.amber} strokeDasharray="4 4" strokeOpacity={0.6} />
        <Tooltip contentStyle={tooltipStyle} />
        <Bar
          dataKey="score"
          radius={[0, 2, 2, 0]}
          barSize={14}
          label={{ position: "right", fill: "#94a3b8", fontSize: 10 }}
        >
          {data.map((entry) => (
            <Cell key={entry.metric} fill={barColor(entry.score)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
