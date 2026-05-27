import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { axisTick, BLOOMBERG, chartCursor } from "@/utils/chartTheme";
import { healthScoreFill } from "@/utils/risk";

interface Point {
  category: string;
  score: number;
}

export function CategoryBarChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} layout="vertical" margin={{ left: 4, right: 12 }}>
        <CartesianGrid stroke={BLOOMBERG.grid} horizontal={false} />
        <XAxis type="number" domain={[0, 100]} tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis
          type="category"
          dataKey="category"
          width={76}
          tick={axisTick}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip
          content={<ChartTooltip />}
          cursor={chartCursor}
          wrapperStyle={{ outline: "none" }}
        />
        <Bar dataKey="score" radius={[0, 2, 2, 0]} barSize={14}>
          {data.map((entry) => (
            <Cell key={entry.category} fill={healthScoreFill(entry.score)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
