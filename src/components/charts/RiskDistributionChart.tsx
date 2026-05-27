import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { chartCursor, legendStyle } from "@/utils/chartTheme";

interface DataPoint {
  name: string;
  value: number;
  fill: string;
}

export function RiskDistributionChart({ data }: { data: DataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={75}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.fill} stroke="transparent" />
          ))}
        </Pie>
        <Tooltip
          content={<ChartTooltip />}
          cursor={chartCursor}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={legendStyle} />
      </PieChart>
    </ResponsiveContainer>
  );
}
