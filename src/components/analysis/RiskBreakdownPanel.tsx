import { TerminalPanel } from "@/components/ui/terminal-panel";
import type { AnomalyItem } from "@/types/analysis";
import { RISK_COLORS } from "@/utils/risk";

interface RiskBreakdownPanelProps {
  anomalies: AnomalyItem[];
  recommendations: string[];
}

export function RiskBreakdownPanel({
  anomalies,
  recommendations,
}: RiskBreakdownPanelProps) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <TerminalPanel title="Anomalies" ticker="ALERT">
        <ul className="space-y-3">
          {anomalies.map((a) => {
            const c = RISK_COLORS[a.severity];
            return (
              <li
                key={a.id}
                className="border-l-2 pl-3"
                style={{ borderLeftColor: c.fill }}
              >
                <p className={`text-sm font-medium ${c.text}`}>{a.field}</p>
                <p className="mt-0.5 text-sm text-slate-500">{a.description}</p>
              </li>
            );
          })}
        </ul>
      </TerminalPanel>

      <TerminalPanel title="Recommendations" ticker="ACTION">
        <ol className="list-decimal space-y-2 pl-4 text-sm text-slate-400">
          {recommendations.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ol>
      </TerminalPanel>
    </div>
  );
}
