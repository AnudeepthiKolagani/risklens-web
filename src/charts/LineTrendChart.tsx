import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { date: "Jan", value: 62 },
  { date: "Feb", value: 60 },
  { date: "Mar", value: 58 },
  { date: "Apr", value: 59 },
  { date: "May", value: 57 },
  { date: "Jun", value: 58 },
];

export function LineTrendChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            wrapperStyle={{
              background: "rgba(15,23,42,0.95)",
              borderRadius: 8,
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#7c3aed"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineTrendChart;
