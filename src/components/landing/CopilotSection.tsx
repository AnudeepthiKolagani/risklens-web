import { motion } from "framer-motion";
import { Bot, Sparkles, MessageSquare } from "lucide-react";

export function CopilotSection() {
  return (
    <section
      id="copilot"
      className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute left-0 top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(6,182,212,0.16),_transparent_56%)] blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
              AI Copilot
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Instant explanations for portfolio risk and concentration drivers.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Ask RiskLens questions in plain language and get concise insight,
              action points, and scenario context for your holdings.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="glass-panel rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_45px_90px_-45px_rgba(15,23,42,0.95)] backdrop-blur-3xl">
              <div className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Bot className="h-5 w-5 text-cyan-300" />
                  <span>RiskLens Copilot</span>
                </div>
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  AI Assistant
                </span>
              </div>
              <div className="mt-6 space-y-5">
                <div className="rounded-[1.8rem] bg-slate-950/80 p-5 text-sm text-slate-200 shadow-sm shadow-slate-950/20">
                  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-300/90">
                    <MessageSquare className="h-3.5 w-3.5" />
                    User
                  </div>
                  <p className="text-base leading-7 text-slate-100">
                    Why is my portfolio risky?
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12 }}
                  className="rounded-[1.8rem] bg-slate-950/85 p-6 text-sm text-slate-200 shadow-[0_30px_80px_-40px_rgba(7,11,27,0.65)]"
                >
                  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-violet-300/90">
                    <Sparkles className="h-3.5 w-3.5" />
                    RiskLens AI
                  </div>
                  <p className="text-base leading-8 text-slate-100">
                    Your portfolio has high exposure to technology equities,
                    increasing concentration risk during volatile market
                    conditions.
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                    <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300" />
                    <span>Simulating multi-factor risk indicators...</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
