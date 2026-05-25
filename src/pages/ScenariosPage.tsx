import { useState } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { SectionHeader } from "../components/shared/SectionHeader";
import { ScenarioCard } from "../components/shared/ScenarioCard";
import { motion } from "framer-motion";

const scenarios = [
  {
    id: "tech",
    title: "Tech Crash",
    impact: "-18%",
    severity: 8,
    sectors: ["Technology"],
  },
  {
    id: "rate",
    title: "Interest Rate Hike",
    impact: "-6%",
    severity: 5,
    sectors: ["Financials", "Real Estate"],
  },
  {
    id: "recession",
    title: "Global Recession",
    impact: "-22%",
    severity: 9,
    sectors: ["Cyclicals", "Energy"],
  },
  {
    id: "inflation",
    title: "Inflation Spike",
    impact: "-9%",
    severity: 6,
    sectors: ["Commodities", "Energy"],
  },
  {
    id: "ai",
    title: "AI Bubble Burst",
    impact: "-25%",
    severity: 10,
    sectors: ["Technology"],
  },
];

export function ScenariosPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <DashboardLayout fileCount={2} totalSize={1024}>
      <div className="space-y-6">
        <SectionHeader
          title="Scenarios"
          subtitle="Simulate market events and stress tests"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/6 bg-slate-950/60 p-4 shadow-lg backdrop-blur"
            >
              <ScenarioCard scenario={s} onOpen={() => setActive(s.id)} />
            </motion.div>
          ))}
        </div>

        {active ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-3xl rounded-2xl border border-white/8 bg-slate-950/70 p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">
                Scenario details
              </h3>
              <p className="mt-2 text-slate-300">
                Projected sector impacts, portfolio loss estimates and
                recommendations.
              </p>
              <div className="mt-4 flex justify-end gap-3">
                <button
                  className="rounded-md bg-white/5 px-4 py-2 text-sm text-white"
                  onClick={() => setActive(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
    </DashboardLayout>
  );
}

export default ScenariosPage;
