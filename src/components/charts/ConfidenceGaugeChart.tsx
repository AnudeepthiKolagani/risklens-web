import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { healthScoreFill } from "@/utils/risk";

export function ConfidenceGaugeChart({ value }: { value: number }) {
  const fill = healthScoreFill(value);
  const data = [{ name: "Confidence", value, fill }];

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="62%"
          outerRadius="92%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            dataKey="value"
            cornerRadius={2}
            background={{ fill: "rgba(255,255,255,0.06)" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-6">
        <span className="font-metrics text-3xl font-bold" style={{ color: fill }}>
          {value}%
        </span>
        <span className="text-sm font-medium uppercase tracking-wider text-slate-500">
          Confidence
        </span>
      </div>
    </div>
  );
}
