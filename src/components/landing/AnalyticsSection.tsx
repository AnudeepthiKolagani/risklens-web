import { motion } from "framer-motion";
import { PieChart, TrendingUp } from "lucide-react";

export function AnalyticsSection() {
  return (
    <section
      id="analytics"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10"
    >
      {/* Background Glow */}
      <div className="analytics-glow" />

      <div className="mx-auto max-w-7xl">
        {/* TOP CONTENT */}
        <div className="flex flex-col gap-2 items-center text-center">
          <p className="text-lg font-bold uppercase tracking-[0.1em] text-cyan-300">
            Analytics
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI-powered portfolio analytics built for modern investment teams.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            RiskLens transforms complex portfolio data into intuitive visual
            insights through interactive charts, exposure analysis, scenario
            simulations, and AI-driven risk intelligence.
          </p>

          {/* Bullet Points */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            {[
              "Real-time portfolio risk analysis",
              "Interactive exposure visualizations",
              "AI-driven scenario simulations",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl"
              >
                <div className="h-2 w-2 rounded-full bg-cyan-300" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL ANALYTICS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Main Chart */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#081120]/80 p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-3xl">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Portfolio Performance
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold text-white">
                    +24.8%
                  </h3>
                </div>

                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-sm text-emerald-300">
                  Stable Growth
                </div>
              </div>

              {/* Graph */}
              <div className="relative mt-12 h-[320px]">
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.06]">
                  <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:48px_48px]" />
                </div>

                {/* SVG Graph */}
                <svg
                  viewBox="0 0 600 300"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  {/* Area */}
                  <motion.path
                    d="M0 260 C80 230 140 190 220 180 C300 170 340 120 420 100 C500 80 560 55 600 40 L600 300 L0 300 Z"
                    fill="url(#areaGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />

                  {/* Line */}
                  <motion.path
                    d="M0 260 C80 230 140 190 220 180 C300 170 340 120 420 100 C500 80 560 55 600 40"
                    stroke="url(#lineGradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
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
                      <stop offset="0%" stopColor="#22D3EE" />
                      <stop offset="100%" stopColor="#A78BFA" />
                    </linearGradient>

                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="rgba(34,211,238,0.35)" />

                      <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Bottom Labels */}
              <div className="mt-6 flex justify-between text-sm text-slate-500">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* Side Analytics */}
            <div className="grid gap-6">
              {/* Risk Score */}
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl">
                <p className="text-sm text-slate-500">AI Risk Score</p>

                <div className="mt-6 flex items-center justify-center">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 p-[10px]">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#081120]">
                      <span className="text-5xl font-semibold text-white">
                        72
                      </span>

                      <span className="mt-2 text-sm text-slate-400">
                        Stable
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-center text-sm leading-7 text-slate-400">
                  AI detected balanced exposure with lower-than-average
                  volatility.
                </p>
              </div>

              {/* Allocation */}
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">Asset Allocation</p>

                  <PieChart className="h-5 w-5 text-cyan-300" />
                </div>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      label: "Equities",
                      value: "58%",
                    },
                    {
                      label: "Fixed Income",
                      value: "24%",
                    },
                    {
                      label: "Alternatives",
                      value: "18%",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex justify-between text-sm text-slate-300">
                        <span>{item.label}</span>

                        <span>{item.value}</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400"
                          style={{
                            width: item.value,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
