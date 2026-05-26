import type { AnalysisResult } from "@/types/analysis";
import { RISK_FILL } from "@/utils/risk";

function heatColor(value: number) {
  if (value >= 60) return { bg: "bg-red-500/80", text: "text-white" };
  if (value >= 40) return { bg: "bg-amber-500/70", text: "text-slate-900" };
  return { bg: "bg-emerald-500/60", text: "text-slate-900" };
}

export function RiskHeatmapChart({
  data,
}: {
  data: AnalysisResult["heatmapMatrix"];
}) {
  const xs = [...new Set(data.map((d) => d.x))];
  const ys = [...new Set(data.map((d) => d.y))];

  return (
    <div>
      <div className="mb-2 flex flex-wrap gap-3 text-[10px] text-slate-500">
        <span className="flex items-center gap-1">
          <span className="bloomberg-legend-dot bg-emerald-500" /> Low
        </span>
        <span className="flex items-center gap-1">
          <span className="bloomberg-legend-dot bg-amber-500" /> Moderate
        </span>
        <span className="flex items-center gap-1">
          <span className="bloomberg-legend-dot bg-red-500" /> High
        </span>
      </div>
      <table className="w-full border-collapse text-xs font-medium">
        <thead>
          <tr>
            <th className="p-1.5 text-left text-slate-500" />
            {xs.map((x) => (
              <th key={x} className="p-1.5 text-center text-slate-500">
                {x}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ys.map((y) => (
            <tr key={y}>
              <td className="p-1.5 text-slate-500">{y}</td>
              {xs.map((x) => {
                const cell = data.find((d) => d.x === x && d.y === y);
                const v = cell?.value ?? 0;
                const c = heatColor(v);
                return (
                  <td key={`${x}-${y}`} className="p-1">
                    <div
                      className={`flex h-9 items-center justify-center rounded-sm ${c.bg} ${c.text}`}
                    >
                      {v}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
