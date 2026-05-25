import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Activity, BarChart3 } from "lucide-react";
import { Button } from "../ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
  onViewDemo: () => void;
}

export function HeroSection({ onGetStarted, onViewDemo }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_32%)]" />
      <div className="pointer-events-none absolute right-[-120px] top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(123,104,238,0.18),_transparent_50%)] blur-3xl" />
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_30px_120px_-80px_rgba(56,189,248,0.55)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Institutional-grade AI portfolio intelligence.
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            AI-Native Portfolio Intelligence Platform
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
            RiskLens helps users analyze portfolio risk, diversification,
            scenario exposure, and market intelligence using AI-powered
            insights.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              onClick={onGetStarted}
              className="min-w-[140px] bg-slate-100/10 text-white shadow-lg shadow-cyan-500/10 hover:bg-slate-100/15"
              size="lg"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              onClick={onViewDemo}
              className="min-w-[140px] border-white/15 text-slate-100 shadow-lg shadow-black/20 hover:border-cyan-300/40 hover:bg-white/5"
              size="lg"
            >
              View Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative max-w-xl xl:max-w-2xl"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_60px_120px_-60px_rgba(14,16,23,0.9)] backdrop-blur-3xl">
            <div className="flex items-center justify-between gap-4 pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  RiskLens dashboard
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Risk Overview
                </p>
              </div>
              <div className="rounded-3xl bg-white/5 px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10">
                Live preview
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_-50px_rgba(40,118,255,0.35)] backdrop-blur-2xl">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Volatility</span>
                  <span className="text-white">12.4%</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-3/4 rounded-full bg-cyan-400" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
                  <Activity className="h-4 w-4 text-cyan-300" />
                  Data-driven risk scoring for exposure.
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Scenario pulse</span>
                  <span className="text-white">Stable</span>
                </div>
                <div className="mt-4 flex h-28 items-end gap-3">
                  <div className="flex-1 rounded-[1rem] bg-slate-900 p-2">
                    <div className="h-14 rounded-full bg-gradient-to-b from-cyan-300 via-slate-300/30 to-transparent" />
                  </div>
                  <div className="flex-1 rounded-[1rem] bg-slate-900 p-2">
                    <div className="h-20 rounded-full bg-gradient-to-b from-violet-300 via-slate-300/30 to-transparent" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-300">
                  <BarChart3 className="h-4 w-4 text-violet-300" />
                  Deep market exposure visualizations.
                </div>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/40 p-4 shadow-inner shadow-slate-950/20">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { label: "Equity", value: "58%" },
                  { label: "Fixed Income", value: "24%" },
                  { label: "Alternate", value: "18%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-slate-950/60 p-3 text-sm text-slate-300"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between rounded-[1.8rem] border border-cyan-300/10 bg-cyan-500/5 px-5 py-4 text-sm text-slate-200 shadow-[0_20px_90px_-70px_rgba(34,211,238,0.9)] backdrop-blur-xl">
            <div>
              <p className="text-slate-300">Optimized for risk teams</p>
              <p className="mt-1 text-white">
                Institutional workflows, audit-ready output, and AI-backed
                explanations.
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-cyan-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
