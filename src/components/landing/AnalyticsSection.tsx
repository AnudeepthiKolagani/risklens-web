import { motion } from "framer-motion";
import { PieChart, TrendingUp } from "lucide-react";

export function AnalyticsSection() {
  return (
    <section
      id="analytics"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="analytics-glow" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
              Analytics
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Visualize portfolio risks and market exposure through intelligent
              graphical insights.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              RiskLens brings premium visual intelligence to every risk review:
              charts, heatmaps, tables and scenario meters designed for
              institutional decision-making.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_45px_90px_-45px_rgba(15,23,42,0.95)] backdrop-blur-3xl">
              <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5 shadow-inner shadow-slate-950/20">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Exposure share</span>
                    <span className="text-white">68% equities</span>
                  </div>
                  <div className="mt-5 flex gap-3">
                    <div className="h-32 w-32 rounded-full bg-linear-to-br from-cyan-400 via-slate-900 to-violet-400 p-4">
                      <div className="h-full w-full rounded-full bg-slate-950/80 p-4">
                        <div className="grid h-full place-items-center rounded-full bg-slate-950/10 text-center text-sm text-slate-200">
                          <span className="text-3xl font-semibold text-white">
                            72%
                          </span>
                          <span className="mt-1 block text-xs text-slate-400">
                            Risk index
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="rounded-3xl bg-slate-900/70 p-4 text-sm text-slate-300">
                        <div className="flex items-center justify-between text-slate-400">
                          <span>Liquidity heat</span>
                          <span>Stable</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-slate-800">
                          <div className="h-full w-4/5 rounded-full bg-emerald-400" />
                        </div>
                      </div>
                      <div className="rounded-3xl bg-slate-900/70 p-4 text-sm text-slate-300">
                        <div className="flex items-center justify-between text-slate-400">
                          <span>Stress capacity</span>
                          <span>Moderate</span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-slate-800">
                          <div className="h-full w-1/2 rounded-full bg-amber-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-5">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 shadow-inner shadow-slate-950/10">
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <PieChart className="h-4 w-4 text-cyan-300" />
                      Allocation breakdown
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                      {[
                        {
                          label: "Equities",
                          value: "58%",
                          color: "bg-cyan-300/70",
                        },
                        {
                          label: "Debt",
                          value: "24%",
                          color: "bg-violet-300/70",
                        },
                        {
                          label: "Alternatives",
                          value: "12%",
                          color: "bg-sky-300/60",
                        },
                        {
                          label: "Cash",
                          value: "6%",
                          color: "bg-slate-500/40",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="space-y-2 rounded-3xl bg-slate-900/80 p-3"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span>{item.label}</span>
                            <span className="text-white">{item.value}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                            <div
                              className={`${item.color} h-full rounded-full`}
                              style={{ width: item.value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5 shadow-inner shadow-slate-950/10">
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <TrendingUp className="h-4 w-4 text-violet-300" />
                      Performance trend
                    </div>
                    <div className="mt-6 h-36 overflow-hidden rounded-[1.5rem] bg-slate-900/70 p-3">
                      <div className="relative h-full w-full">
                        <div className="absolute left-0 top-8 h-0.5 w-full bg-white/10" />
                        <svg viewBox="0 0 280 120" className="h-full w-full">
                          <path
                            d="M12 92 C70 62, 115 82, 160 46 C190 20, 220 55, 268 28"
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient
                              id="lineGradient"
                              x1="0"
                              y1="0"
                              x2="1"
                              y2="0"
                            >
                              <stop offset="0%" stopColor="#22d3ee" />
                              <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-7 rounded-[1.75rem] bg-slate-900/70 p-4 text-sm text-slate-300 ring-1 ring-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-white">Portfolio table</p>
                    <p className="text-slate-500">
                      Position-level risk exposure in one view.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-cyan-300">
                    Live
                  </div>
                </div>
                <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
                  {[
                    {
                      name: "Global Large Cap",
                      exposure: "32%",
                      risk: "Medium",
                    },
                    { name: "Growth Tech", exposure: "25%", risk: "High" },
                    { name: "Fixed Income", exposure: "18%", risk: "Low" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="rounded-3xl bg-slate-950/80 p-3"
                    >
                      <div className="mb-2 font-semibold text-white">
                        {row.name}
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span>Exposure</span>
                        <span>{row.exposure}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-slate-400">
                        <span>Risk</span>
                        <span className="text-sm text-cyan-300">
                          {row.risk}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
