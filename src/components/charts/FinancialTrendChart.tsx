import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisTick, BLOOMBERG, tooltipStyle } from "@/utils/chartTheme";
import { RISK_FILL } from "@/utils/risk";

interface Point {
  period: string;
  revenue: number;
  risk: number;
}

export function FinancialTrendChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={RISK_FILL.low} stopOpacity={0.35} />
            <stop offset="100%" stopColor={RISK_FILL.low} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke={BLOOMBERG.grid} strokeDasharray="3 3" />
        <XAxis dataKey="period" tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis yAxisId="left" tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={axisTick}
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
        />
        <Tooltip contentStyle={tooltipStyle} />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="revenue"
          name="Revenue"
          stroke={RISK_FILL.low}
          fill="url(#revenueGrad)"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="risk"
          name="Risk score"
          stroke={RISK_FILL.moderate}
          strokeWidth={2}
          dot={{ r: 3, fill: RISK_FILL.moderate }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
