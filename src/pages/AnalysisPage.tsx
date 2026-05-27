import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { TerminalPanel } from "@/components/ui/terminal-panel";
import { KpiMetricsBar } from "@/components/analysis/KpiMetricsBar";
import { VisualizationGrid } from "@/components/analysis/VisualizationGrid";
import { InsightsFeed } from "@/components/analysis/InsightsFeed";
import { RiskBreakdownPanel } from "@/components/analysis/RiskBreakdownPanel";
import { AnalysisDetailsPanel } from "@/components/analysis/AnalysisDetailsPanel";
import { useAnalysisStore } from "@/store/analysisStore";
import { createMockAnalysis } from "@/mock/analysisData";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function AnalysisPage() {
  const navigate = useNavigate();
  const result = useAnalysisStore((s) => s.result);

  useEffect(() => {
    if (!result) {
      useAnalysisStore.setState({ result: createMockAnalysis(2) });
    }
  }, [result]);

  const data = useAnalysisStore((s) => s.result);

  if (!data) {
    return (
      <TerminalLayout title="Analysis" subtitle="Loading…">
        <Skeleton className="h-24 rounded-sm" />
        <Skeleton className="h-72 rounded-sm" />
      </TerminalLayout>
    );
  }

  return (
    <TerminalLayout
      title="Risk Analysis"
      subtitle={`${data.documentCount} documents · ${new Date(data.generatedAt).toLocaleString()}`}
      fileCount={data.documentCount}
    >
      <section className="space-y-3">
        <p className="analysis-section-title">Risk summary</p>
        <TerminalPanel title="Executive summary" ticker="TXT">
          <p className="text-sm leading-relaxed text-slate-400">
            {data.summary}
          </p>
        </TerminalPanel>
        <KpiMetricsBar metrics={data.kpis} />
      </section>

      <VisualizationGrid result={data} />

      <div className="grid gap-3 xl:grid-cols-12">
        <div className="space-y-3 xl:col-span-8">
          <AnalysisDetailsPanel result={data} />
          <RiskBreakdownPanel
            anomalies={data.anomalies}
            recommendations={data.recommendations}
          />
        </div>
        <InsightsFeed insights={data.insights} className="xl:col-span-4" />
      </div>

      <div className="flex justify-end border-t border-white/10 pt-4">
        <Button
          variant="outline"
          onClick={() => navigate("/dashboard")}
          className="bg-cyan-300 text-cyan-700 hover:text-cyan-400 hover:bg-cyan-300/20 cursor-pointer"
        >
          New analysis
        </Button>
      </div>
    </TerminalLayout>
  );
}

export default AnalysisPage;
