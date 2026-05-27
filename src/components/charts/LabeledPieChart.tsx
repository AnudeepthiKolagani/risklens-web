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

interface Point {
  name: string;
  value: number;
  fill: string;
}

export function LabeledPieChart({
  data,
  showLabels = false,
}: {
  data: Point[];
  showLabels?: boolean;
}) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="48%"
          innerRadius={50}
          outerRadius={78}
          paddingAngle={2}
          dataKey="value"
          label={
            showLabels
              ? ({ name, percent }) =>
                  `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
              : false
          }
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.fill} stroke="#040608" strokeWidth={1} />
          ))}
        </Pie>
        <Tooltip
          content={<ChartTooltip />}
          cursor={chartCursor}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{ ...legendStyle, paddingTop: 8 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
