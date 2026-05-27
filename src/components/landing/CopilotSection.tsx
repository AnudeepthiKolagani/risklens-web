import { motion } from "framer-motion";
import { Bot, Sparkles, MessageSquare } from "lucide-react";

export function CopilotSection() {
  return (
    <section
      id="copilot"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* TOP CONTENT */}
        <div className="flex flex-col gap-2 items-center text-center">
          <p className="text-lg font-bold uppercase tracking-[0.1em] text-cyan-300/80">
            AI Copilot
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Chat with your portfolio intelligence assistant.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ask questions about portfolio exposure, diversification, market
            risk, and investment concentration — and get instant AI-powered
            insights in plain language.
          </p>
        </div>

        {/* CHAT UI */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#081120]/80 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-3xl">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
                  <Bot className="h-6 w-6 text-cyan-300" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    RiskLens AI Copilot
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />

                    <span>Online</span>
                  </div>
                </div>
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                AI Assistant
              </div>
            </div>

            {/* Chat Body */}
            <div className="space-y-6 p-6 sm:p-8">
              {/* USER MESSAGE */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-end"
              >
                <div className="max-w-[80%] rounded-[2rem] rounded-br-md bg-cyan-500 px-6 py-4 text-white shadow-lg shadow-cyan-500/20">
                  <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-100">
                    <MessageSquare className="h-3.5 w-3.5" />
                    You
                  </div>

                  <p className="text-[15px] leading-7">
                    Why is my portfolio considered high risk?
                  </p>
                </div>
              </motion.div>

              {/* BOT MESSAGE */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-start"
              >
                <div className="max-w-[85%] rounded-[2rem] rounded-bl-md border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-2xl">
                  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    RiskLens AI
                  </div>

                  <p className="text-[15px] leading-8 text-slate-200">
                    Your portfolio has a strong concentration in high-volatility
                    technology equities, which increases exposure during
                    uncertain market conditions.
                  </p>

                  {/* AI INSIGHTS */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        label: "Tech Exposure",
                        value: "62%",
                      },
                      {
                        label: "Volatility",
                        value: "High",
                      },
                      {
                        label: "Risk Score",
                        value: "72/100",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                          {item.label}
                        </p>

                        <p className="mt-2 text-lg font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                    <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300" />
                    AI analyzing diversification and market correlations...
                  </div>
                </div>
              </motion.div>

              {/* SECOND USER MESSAGE */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex justify-end"
              >
                <div className="max-w-[70%] rounded-[2rem] rounded-br-md bg-cyan-500 px-6 py-4 text-white shadow-lg shadow-cyan-500/20">
                  <p className="text-[15px] leading-7">
                    What should I improve?
                  </p>
                </div>
              </motion.div>

              {/* SECOND BOT MESSAGE */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex justify-start"
              >
                <div className="max-w-[80%] rounded-[2rem] rounded-bl-md border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-2xl">
                  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    RiskLens AI
                  </div>

                  <p className="text-[15px] leading-8 text-slate-200">
                    Consider increasing fixed-income allocation and reducing
                    concentration in large-cap technology stocks to improve
                    diversification and lower volatility.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
