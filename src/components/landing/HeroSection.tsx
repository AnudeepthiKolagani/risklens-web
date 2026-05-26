import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Activity,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
} from "lucide-react";

import { Button } from "../ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
  onViewDemo: () => void;
}

const typingFeatures = [
  "Analyze portfolio risk in real-time.",
  "Detect diversification gaps instantly.",
  "Generate AI-powered market insights.",
  "Stress test investment scenarios.",
];

export function HeroSection({ onGetStarted, onViewDemo }: HeroSectionProps) {
  const [displayText, setDisplayText] = useState("");
  const [featureIndex, setFeatureIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentFeature = useMemo(
    () => typingFeatures[featureIndex],
    [featureIndex],
  );

useEffect(() => {
  let timeout: ReturnType<typeof setTimeout>;

  // Pause before deleting
  if (!isDeleting && displayText === currentFeature) {
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, 1200);
  }

  // Move to next feature
  else if (isDeleting && displayText === "") {
    timeout = setTimeout(() => {
      setIsDeleting(false);

      setFeatureIndex((prev) => {
        return (prev + 1) % typingFeatures.length;
      });
    }, 200);
  }

  // Typing / deleting animation
  else {
    timeout = setTimeout(
      () => {
        setDisplayText((prev) => {
          if (isDeleting) {
            return currentFeature.slice(0, prev.length - 1);
          }

          return currentFeature.slice(0, prev.length + 1);
        });
      },
      isDeleting ? 40 : 80,
    );
  }

  return () => clearTimeout(timeout);
}, [displayText, isDeleting, currentFeature]);


return (
  <section
    id="hero"
    className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10"
  >
    {/* Background */}
    <div className="absolute inset-0 -z-10 bg-[#020617]" />

    <div className="pointer-events-none absolute inset-x-0 top-0 h-[450px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_40%)]" />

    <div className="pointer-events-none absolute right-[-150px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />

    <div className="pointer-events-none absolute left-[-120px] bottom-0 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-3xl" />

    <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
      {/* LEFT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Animated Badge */}
        <div className="group relative mb-8 inline-flex overflow-hidden rounded-full p-[1px]">
          {/* rotating glow line */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-120%] bg-conic from-cyan-400 via-violet-400 to-cyan-400 opacity-90 blur-sm"
          />

          <div className="relative flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/90 px-5 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-300" />

            <span className="text-sm font-medium text-slate-200">
              Institutional-grade AI portfolio intelligence.
            </span>
          </div>
        </div>

        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          AI-Native
          <span className="block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
            Portfolio Intelligence
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          RiskLens empowers investment teams with AI-powered analytics,
          portfolio risk assessment, diversification intelligence, and
          scenario-based market insights.
        </p>

        {/* Typing Effect */}
        <div className="mt-8 flex min-h-[70px] items-center rounded-3xl border border-cyan-400/10 bg-white/[0.03] px-6 py-5 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 ring-1 ring-cyan-400/20">
              <BrainCircuit className="h-6 w-6 text-cyan-300" />
            </div>

            <div>
              <p className="mb-1 text-xs text-left uppercase tracking-[0.25em] text-slate-500">
                AI Capabilities
              </p>

              <div className="flex items-center text-lg font-medium text-white sm:text-xl">
                {displayText}

                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="ml-1 inline-block h-6 w-[2px] bg-cyan-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Risk Scoring",
              value: "99.2%",
              subtitle: "Portfolio stability accuracy",
              glow: "from-cyan-400/20 to-cyan-500/5",
            },
            {
              icon: TrendingUp,
              title: "Market Signals",
              value: "24/7",
              subtitle: "Continuous market monitoring",
              glow: "from-violet-400/20 to-violet-500/5",
            },
            {
              icon: BrainCircuit,
              title: "AI Insights",
              value: "Realtime",
              subtitle: "Instant investment intelligence",
              glow: "from-emerald-400/20 to-emerald-500/5",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -6,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl"
            >
              {/* Glow Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 group-hover:ring-cyan-300/20 transition-all duration-500" />

              {/* Floating Blur */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 blur-3xl" />

              <div className="relative z-10">
                {/* Top Section */}
                <div className="flex items-start justify-between">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.35)]">
                    <item.icon className="h-6 w-6 text-cyan-300" />
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                    Live
                  </div>
                </div>

                {/* Value */}
                <div className="mt-7">
                  <h3 className="text-3xl font-semibold tracking-tight text-white">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-200">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-5">
          <Button
            onClick={onGetStarted}
            size="lg"
            className="group h-14 rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-cyan-400 to-cyan-500 px-8 text-base font-semibold text-slate-950 shadow-[0_20px_80px_-15px_rgba(34,211,238,0.55)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_25px_90px_-10px_rgba(34,211,238,0.75)]"
          >
            Get Started
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>

          <Button
            variant="outline"
            onClick={onViewDemo}
            size="lg"
            className="h-14 rounded-2xl border border-white/15 bg-white/[0.03] px-8 text-base font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-100"
          >
            View Demo
          </Button>
        </div>
      </motion.div>

      {/* RIGHT SECTION */}
      {/* RIGHT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-full max-w-[620px]"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-cyan-400/10 blur-3xl" />

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#07111F]/90 p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-3xl">
          {/* Top Labels */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                RiskLens AI
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                Portfolio Growth Analysis
              </h3>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
              <div className="h-2 w-2 rounded-full bg-emerald-300" />

              <span className="text-xs font-medium text-emerald-300">Live</span>
            </div>
          </div>

          {/* Main Graph */}
          <div className="relative mt-16 h-[320px]">
            {/* Gradient Glow */}
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.06]">
              <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            {/* Graph SVG */}
            <svg
              viewBox="0 0 600 300"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              {/* Area Glow */}
              <motion.path
                d="M0 250 C80 220 120 200 180 180 C240 160 280 170 340 140 C400 110 460 90 520 70 C560 55 590 45 600 40 L600 300 L0 300 Z"
                fill="url(#areaGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              />

              {/* Main Line */}
              <motion.path
                d="M0 250 C80 220 120 200 180 180 C240 160 280 170 340 140 C400 110 460 90 520 70 C560 55 590 45 600 40"
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

                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.35)" />

                  <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Dot */}
            <motion.div
              animate={{
                x: [0, 8, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-[12%] top-[12%]"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-300 blur-xl" />

                <div className="relative h-5 w-5 rounded-full border-4 border-[#07111F] bg-cyan-300" />
              </div>
            </motion.div>

            {/* Bottom Labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-slate-500">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <div>
              <p className="text-sm text-slate-500">Portfolio Stability</p>

              <h4 className="mt-1 text-3xl font-semibold text-white">+24%</h4>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-sm text-slate-500">Risk Reduction</p>

              <h4 className="mt-1 text-3xl font-semibold text-white">-18%</h4>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-sm text-slate-500">AI Confidence</p>

              <h4 className="mt-1 text-3xl font-semibold text-cyan-300">98%</h4>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
}
