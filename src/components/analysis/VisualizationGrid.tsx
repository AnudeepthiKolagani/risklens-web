import type { AnalysisResult } from "@/types/analysis";
import { TerminalPanel } from "@/components/ui/terminal-panel";
import { RiskLegend } from "@/components/charts/RiskLegend";
import { LabeledPieChart } from "@/components/charts/LabeledPieChart";
import { FinancialTrendChart } from "@/components/charts/FinancialTrendChart";
import { CategoryBarChart } from "@/components/charts/CategoryBarChart";
import { ConfidenceGaugeChart } from "@/components/charts/ConfidenceGaugeChart";

export function VisualizationGrid({ result }: { result: AnalysisResult }) {
  return (
    <section className="space-y-3">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <p className="bloomberg-section-title">Analytics workstation</p>
        <RiskLegend />
      </div>

      <div className="grid gap-3 lg:grid-cols-12">
        {/* Line / area — primary trend */}
        <TerminalPanel
          title="Financial & risk trend"
          subtitle="Revenue (green) · risk score (amber)"
          ticker="CHART"
          className="lg:col-span-8"
          bodyClassName="min-h-[260px]"
        >
          <FinancialTrendChart data={result.financialTrend} />
        </TerminalPanel>

        {/* Pie — risk distribution */}
        <TerminalPanel
          title="Risk distribution"
          subtitle="By risk category"
          ticker="PIE"
          className="lg:col-span-4"
          bodyClassName="min-h-[260px]"
        >
          <LabeledPieChart data={result.riskDistribution} />
        </TerminalPanel>

        {/* Bar — category scores */}
        <TerminalPanel
          title="Category risk scores"
          subtitle="Green · amber · red by threshold"
          ticker="BAR"
          className="lg:col-span-8"
        >
          <CategoryBarChart data={result.categoryBreakdown} />
        </TerminalPanel>

        {/* Gauge — confidence */}
        <TerminalPanel
          title="Model confidence"
          subtitle="Ensemble certainty"
          ticker={`${result.confidenceGauge}%`}
          className="lg:col-span-4"
        >
          <ConfidenceGaugeChart value={result.confidenceGauge} />
        </TerminalPanel>
      </div>
    </section>
  );
}
