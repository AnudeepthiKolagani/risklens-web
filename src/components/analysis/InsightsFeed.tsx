import type { InsightItem } from "@/types/analysis";
import { TerminalPanel } from "@/components/ui/terminal-panel";
import { RISK_COLORS } from "@/utils/risk";

export function InsightsFeed({
  insights,
  className = "",
}: {
  insights: InsightItem[];
  className?: string;
}) {
  return (
    <TerminalPanel
      title="Key insights"
      subtitle="By severity"
      ticker={`${insights.length}`}
      className={`xl:sticky xl:top-4 ${className}`}
      bodyClassName="max-h-[480px] overflow-y-auto p-0 divide-y divide-white/[0.06]"
    >
      <ul>
        {insights.map((item) => {
          const c = RISK_COLORS[item.severity];
          return (
            <li key={item.id} className="px-3 py-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider ${c.text}`}
                >
                  {item.category}
                </span>
                <span className="font-metrics text-[10px] text-slate-500">
                  {item.confidence}%
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-200">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{item.body}</p>
            </li>
          );
        })}
      </ul>
    </TerminalPanel>
  );
}
