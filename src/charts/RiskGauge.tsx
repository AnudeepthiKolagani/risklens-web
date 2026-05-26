import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [{ name: "Risk", value: 58 }];

export function RiskGauge({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            clockWise={true}
            dataKey="value"
            cornerRadius={10}
            fill="#f97316"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RiskGauge;
