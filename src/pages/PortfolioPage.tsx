import { useMemo, useState } from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { SectionHeader } from "../components/shared/SectionHeader";
import { StatCard } from "../components/shared/StatCard";
import { SectorPieChart } from "../charts/SectorPieChart";
import { GeoExposureChart } from "../charts/GeoExposureChart";
import { AIInsightCard } from "../components/shared/AIInsightCard";
import { EmptyState } from "../components/shared/EmptyState";

import { motion } from "framer-motion";

import type { Holding } from "../types";

const mockHoldings: Holding[] = [
  {
    id: "1",
    name: "Alpha Tech",
    sector: "Technology",
    allocation: 28.4,
    risk: "High",
    region: "US",
  },
  {
    id: "2",
    name: "Beta Bank",
    sector: "Financials",
    allocation: 18.2,
    risk: "Medium",
    region: "EM",
  },
  {
    id: "3",
    name: "Gamma Energy",
    sector: "Energy",
    allocation: 12.5,
    risk: "Medium",
    region: "EU",
  },
  {
    id: "4",
    name: "Delta Health",
    sector: "Healthcare",
    allocation: 9.3,
    risk: "Low",
    region: "US",
  },
];

export function PortfolioPage() {
  const [query, setQuery] = useState("");
  const holdings = useMemo(
    () =>
      mockHoldings.filter((h) =>
        h.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  const totalAssets = mockHoldings.reduce((s, h) => s + h.allocation, 0);

  return (
    <DashboardLayout fileCount={2} totalSize={1024}>
      <div className="grid gap-6">
        <SectionHeader title="Portfolio" subtitle="Holdings and allocation" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                label="Total Assets"
                value={`$${(totalAssets * 1_000_000).toLocaleString()}`}
              />
              <StatCard label="Diversification Score" value="72" />
              <StatCard label="Risk Score" value="58" />
              <StatCard
                label="Total Allocation"
                value={`${totalAssets.toFixed(1)}%`}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-white/6 bg-slate-950/60 p-4 shadow-lg backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Holdings</h3>
                <input
                  aria-label="Search holdings"
                  placeholder="Search holdings..."
                  className="rounded-md bg-slate-900/60 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-400"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              {holdings.length === 0 ? (
                <EmptyState message="No holdings found." />
              ) : (
                <div className="mt-4 overflow-hidden rounded-md">
                  <table className="w-full table-fixed text-sm">
                    <thead className="text-slate-400">
                      <tr>
                        <th className="text-left">Asset Name</th>
                        <th>Sector</th>
                        <th>Allocation %</th>
                        <th>Risk Level</th>
                        <th>Region</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/3">
                      {holdings.map((h) => (
                        <tr key={h.id} className="hover:bg-white/2 transition">
                          <td className="py-3 font-medium text-white">
                            {h.name}
                          </td>
                          <td className="text-slate-300">{h.sector}</td>
                          <td className="text-slate-300">{h.allocation}%</td>
                          <td className="text-slate-300">{h.risk}</td>
                          <td className="text-slate-300">{h.region}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl border border-white/6 bg-slate-950/60 p-4 shadow-lg backdrop-blur"
            >
              <h4 className="text-sm font-medium text-slate-300">
                Sector Allocation
              </h4>
              <SectorPieChart className="mt-4 h-48" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-2xl border border-white/6 bg-slate-950/60 p-4 shadow-lg backdrop-blur"
            >
              <h4 className="text-sm font-medium text-slate-300">
                Geographic Exposure
              </h4>
              <GeoExposureChart className="mt-4 h-36" />
            </motion.div>

            <AIInsightCard title="Quick Insight">
              Your current allocation is overweight in Technology — consider
              increasing exposure to defensive sectors to reduce concentration
              risk.
            </AIInsightCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default PortfolioPage;
