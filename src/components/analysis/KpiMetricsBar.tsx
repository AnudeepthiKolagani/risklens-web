import type { KpiMetric } from "@/types/analysis";
import { RISK_COLORS } from "@/utils/risk";
import { Sparkline } from "@/components/charts/Sparkline";

const sparkColor: Record<string, string> = {
  low: "#22c55e",
  moderate: "#f59e0b",
  high: "#ef4444",
  critical: "#dc2626",
  info: "#38bdf8",
};

const accentClass: Record<string, string> = {
  low: "kpi-accent-low",
  moderate: "kpi-accent-moderate",
  high: "kpi-accent-high",
  critical: "kpi-accent-critical",
  info: "kpi-accent-info",
};

export function KpiMetricsBar({ metrics }: { metrics: KpiMetric[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
      {metrics.map((m) => {
        const colors = RISK_COLORS[m.level];
        const up = m.trend >= 0;
        return (
          <div
            key={m.id}
            className={`bloomberg-panel px-3 py-2.5 ${accentClass[m.level]}`}
          >
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
              {m.label}
            </p>
            <p className={`mt-1 font-metrics text-xl font-bold ${colors.text}`}>
              {m.value}
              <span className="text-sm font-normal text-slate-500">{m.unit}</span>
            </p>
            <p
              className={`mt-0.5 text-[10px] font-medium ${
                up ? "text-emerald-400/90" : "text-red-400/90"
              }`}
            >
              {up ? "▲" : "▼"} {Math.abs(m.trend)}%
            </p>
            <div className="mt-2 h-6">
              <Sparkline data={m.sparkline} color={sparkColor[m.level]} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
