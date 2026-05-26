import { motion } from "framer-motion";
import {
  TrendingDown,
  ShieldAlert,
  Activity,
  ChevronRight,
} from "lucide-react";
import { scenarioCards } from "./data";

const riskStyles = {
  High: {
    dot: "bg-rose-400",
    text: "text-rose-200",
    bg: "bg-rose-400/10",
    line: "from-rose-400 to-orange-300",
  },
  Moderate: {
    dot: "bg-amber-300",
    text: "text-amber-200",
    bg: "bg-amber-400/10",
    line: "from-amber-300 to-yellow-200",
  },
  Elevated: {
    dot: "bg-violet-300",
    text: "text-violet-200",
    bg: "bg-violet-400/10",
    line: "from-violet-300 to-cyan-300",
  },
};

export function ScenariosSection() {
  return (
    <section
      id="scenario"
      className="relative overflow-hidden px-6 py-28 sm:px-8 lg:px-10"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* TOP CONTENT */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg font-bold uppercase tracking-[0.1em] text-cyan-300/80">
            Scenario Analysis
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Simulate market conditions before they happen.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Analyze how your portfolio behaves during volatility, sector
            crashes, inflation spikes, and stressed market environments using
            AI-powered scenario intelligence.
          </p>
        </div>

        {/* MAIN CONTAINER */}
        <div className="mt-20 overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#07111F]/80 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)] backdrop-blur-3xl">
          {/* Header */}
          <div className="flex flex-col gap-6 border-b border-white/10 px-8 py-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Live Scenario Engine</p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Portfolio Stress Simulations
              </h3>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
              Real-time AI Analysis
            </div>
          </div>

          {/* TABLE STYLE LAYOUT */}
          <div className="divide-y divide-white/10">
            {scenarioCards.map((scenario, index) => {
              const style =
                riskStyles[scenario.risk as keyof typeof riskStyles];

              return (
                <motion.div
                  key={scenario.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative px-8 py-7 transition-all duration-300 hover:bg-white/[0.025]"
                >
                  <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr_0.7fr] lg:items-center">
                    {/* LEFT */}
                    <div>
                      <div className="flex items-center gap-3">
                        <div className={`h-3 w-3 rounded-full ${style.dot}`} />

                        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                          Scenario
                        </p>
                      </div>

                      <h3 className="mt-4 text-3xl font-semibold text-white">
                        {scenario.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                        {scenario.alert}
                      </p>
                    </div>

                    {/* CENTER GRAPH */}
                    <div>
                      <div className="relative h-[120px] overflow-hidden rounded-[1.8rem] border border-white/5 bg-white/[0.03]">
                        {/* Grid */}
                        <div className="absolute inset-0 opacity-[0.05]">
                          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:28px_28px]" />
                        </div>

                        {/* Graph */}
                        <svg
                          viewBox="0 0 300 120"
                          className="absolute inset-0 h-full w-full"
                          fill="none"
                        >
                          {/* Area */}
                          <motion.path
                            d="M0 90 C40 70 70 80 110 55 C150 35 180 75 220 45 C250 25 280 35 300 20 L300 120 L0 120 Z"
                            fill="url(#areaGradient)"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                              duration: 1,
                              delay: index * 0.1,
                            }}
                          />

                          {/* Line */}
                          <motion.path
                            d="M0 90 C40 70 70 80 110 55 C150 35 180 75 220 45 C250 25 280 35 300 20"
                            stroke="url(#lineGradient)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{
                              duration: 1.6,
                              delay: index * 0.1,
                            }}
                          />

                          <defs>
                            <linearGradient
                              id="lineGradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor={
                                  scenario.risk === "High"
                                    ? "#fb7185"
                                    : scenario.risk === "Moderate"
                                      ? "#facc15"
                                      : "#a78bfa"
                                }
                              />

                              <stop offset="100%" stopColor="#22d3ee" />
                            </linearGradient>

                            <linearGradient
                              id="areaGradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor="rgba(34,211,238,0.25)"
                              />

                              <stop
                                offset="100%"
                                stopColor="rgba(34,211,238,0)"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* RIGHT METRICS */}
                    <div className="flex flex-col gap-4">
                      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-slate-500">Impact</p>

                          <TrendingDown className="h-4 w-4 text-slate-500" />
                        </div>

                        <p className="mt-3 text-3xl font-semibold text-white">
                          {scenario.impact}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-slate-500">Risk Level</p>

                          <ShieldAlert className="h-4 w-4 text-slate-500" />
                        </div>

                        <div className="mt-3 flex items-center gap-3">
                          <div
                            className={`h-2.5 w-2.5 rounded-full ${style.dot}`}
                          />

                          <span className={`text-lg font-medium ${style.text}`}>
                            {scenario.risk}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute right-8 top-8 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    <ChevronRight className="h-5 w-5 text-cyan-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/10 px-8 py-5">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <Activity className="h-4 w-4 text-cyan-300" />
              AI continuously monitors macroeconomic and sector-level risks.
            </div>

            <div className="text-sm text-cyan-300">Updated 2 mins ago</div>
          </div>
        </div>
      </div>
    </section>
  );
}
