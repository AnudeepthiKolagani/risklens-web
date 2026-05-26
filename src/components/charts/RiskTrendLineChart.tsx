import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisTick, BLOOMBERG, legendStyle, tooltipStyle } from "@/utils/chartTheme";
import { RISK_FILL } from "@/utils/risk";

interface Point {
  period: string;
  riskIndex: number;
  benchmark?: number;
}

export function RiskTrendLineChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid stroke={BLOOMBERG.grid} strokeDasharray="3 3" />
        <XAxis dataKey="period" tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis tick={axisTick} axisLine={false} tickLine={false} domain={[40, 70]} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={legendStyle} />
        <Line
          type="monotone"
          dataKey="riskIndex"
          name="Risk index"
          stroke={RISK_FILL.moderate}
          strokeWidth={2}
          dot={{ r: 3, fill: RISK_FILL.moderate }}
        />
        {data[0]?.benchmark !== undefined && (
          <Line
            type="monotone"
            dataKey="benchmark"
            name="Benchmark"
            stroke={RISK_FILL.low}
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
}
