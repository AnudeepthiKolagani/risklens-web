import { motion } from "framer-motion";
import { scenarioCards } from "./data";

const riskTone = {
  High: "bg-rose-400/15 text-rose-200 ring-rose-400/25",
  Moderate: "bg-amber-400/10 text-amber-200 ring-amber-400/20",
  Elevated: "bg-violet-400/15 text-violet-200 ring-violet-400/25",
};

export function ScenariosSection() {
  return (
    <section
      id="scenario"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="scenario-glow" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Scenario analysis
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Simulate market regimes with confidence and clarity.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Each scenario card reveals projected portfolio impact, risk signals,
            and actionable context for stressed market conditions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {scenarioCards.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="glass-panel rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.75)] backdrop-blur-3xl transition-all duration-300 hover:border-cyan-300/35"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    {scenario.title}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    {scenario.impact}
                  </h3>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ring-1 ${riskTone[scenario.risk as keyof typeof riskTone]}`}
                >
                  {scenario.risk}
                </span>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-300">
                {scenario.alert}
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-300/80 animate-pulse" />
                <span>Interactive scenario intelligence</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
