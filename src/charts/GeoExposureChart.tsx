import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const data = [
  { region: "US", value: 54 },
  { region: "EU", value: 18 },
  { region: "EM", value: 16 },
  { region: "APAC", value: 12 },
];

export function GeoExposureChart({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="region" stroke="#9ca3af" />
          <Bar dataKey="value" fill="#06b6d4" radius={[6, 6, 0, 0]} />
          <Tooltip
            wrapperStyle={{
              background: "rgba(15,23,42,0.95)",
              borderRadius: 8,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GeoExposureChart;
