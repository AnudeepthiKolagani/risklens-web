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

interface Point {
  sector: string;
  exposure: number;
  fill: string;
}

export function SectorExposureBarChart({ data }: { data: Point[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <CartesianGrid stroke={BLOOMBERG.grid} vertical={false} />
        <XAxis dataKey="sector" tick={axisTick} axisLine={false} tickLine={false} />
        <YAxis tick={axisTick} axisLine={false} tickLine={false} unit="%" />
        <Tooltip
          content={<ChartTooltip />}
          cursor={chartCursor}
          wrapperStyle={{ outline: "none" }}
        />
        <Bar dataKey="exposure" radius={[2, 2, 0, 0]} barSize={32}>
          {data.map((entry) => (
            <Cell key={entry.sector} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
