import { TerminalPanel } from "@/components/ui/terminal-panel";
import { RiskLegend } from "@/components/charts/RiskLegend";
import { SectorExposureBarChart } from "@/components/charts/SectorExposureBarChart";
import { LabeledPieChart } from "@/components/charts/LabeledPieChart";
import { RiskTrendLineChart } from "@/components/charts/RiskTrendLineChart";
import {
  sectorExposure,
  riskMixPie,
  portfolioRiskTrend,
} from "@/mock/dashboardCharts";

export function DashboardChartsPanel() {
  return (
    <section className="space-y-3">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-lg font-semibold text-cyan-300">Market monitor</p>
          <p className="mt-1 text-sm text-slate-500">
            Live risk exposure · color-coded by severity
          </p>
        </div>
        <RiskLegend />
      </div>

      <div className="grid gap-3 lg:grid-cols-12">
        <TerminalPanel
          title="Sector exposure"
          subtitle="Allocation % by GICS"
          ticker="BAR"
          className="lg:col-span-5"
        >
          <SectorExposureBarChart data={sectorExposure} />
        </TerminalPanel>

        <TerminalPanel
          title="Risk severity mix"
          subtitle="Portfolio composition"
          ticker="PIE"
          className="lg:col-span-4"
        >
          <LabeledPieChart data={riskMixPie} />
        </TerminalPanel>

        <TerminalPanel
          title="Risk index"
          subtitle="7-week trend vs benchmark"
          ticker="LINE"
          className="lg:col-span-3"
        >
          <RiskTrendLineChart data={portfolioRiskTrend} />
        </TerminalPanel>
      </div>
    </section>
  );
}
