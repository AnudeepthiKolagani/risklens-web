import { DashboardLayout } from "../layouts/DashboardLayout";
import { SectionHeader } from "../components/shared/SectionHeader";
import { AIInsightCard } from "../components/shared/AIInsightCard";
import { RiskGauge } from "../charts/RiskGauge";
import { LineTrendChart } from "../charts/LineTrendChart";
import { motion } from "framer-motion";

export function AnalysisPage() {
  return (
    <DashboardLayout fileCount={2} totalSize={1024}>
      <div className="space-y-6">
        <SectionHeader
          title="Analysis"
          subtitle="AI-driven portfolio risk intelligence"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-white/6 bg-slate-950/60 p-6 shadow-lg backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-white">AI Summary</h3>
            <p className="mt-2 text-slate-300">
              Your portfolio is highly concentrated in technology equities,
              increasing vulnerability during market rotations. Consider
              rebalancing towards value sectors.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.div className="rounded-2xl border border-white/6 bg-slate-950/60 p-6 shadow-lg backdrop-blur">
                <h4 className="text-sm font-medium text-slate-300">
                  Risk Gauge
                </h4>
                <RiskGauge className="mt-6 h-36" />
              </motion.div>

              <motion.div className="rounded-2xl border border-white/6 bg-slate-950/60 p-6 shadow-lg backdrop-blur">
                <h4 className="text-sm font-medium text-slate-300">
                  Diversification Trend
                </h4>
                <LineTrendChart className="mt-6 h-36" />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <AIInsightCard title="Correlation Warning">
                High positive correlation between your top 5 holdings suggests
                limited diversification benefits.
              </AIInsightCard>
              <AIInsightCard title="Exposure">
                Technology represents 38% of portfolio value.
              </AIInsightCard>
              <AIInsightCard title="Recommendation">
                Run a scenario analysis for rate shocks and tech drawdowns.
              </AIInsightCard>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AnalysisPage;
