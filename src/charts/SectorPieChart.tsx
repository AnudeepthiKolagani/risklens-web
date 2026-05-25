import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Technology", value: 38 },
  { name: "Financials", value: 18 },
  { name: "Energy", value: 12 },
  { name: "Healthcare", value: 10 },
  { name: "Other", value: 22 },
];

const COLORS = ["#06b6d4", "#7c3aed", "#f97316", "#10b981", "#94a3b8"];

export function SectorPieChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={34}
            outerRadius={72}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            wrapperStyle={{
              background: "rgba(15,23,42,0.95)",
              borderRadius: 8,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SectorPieChart;
