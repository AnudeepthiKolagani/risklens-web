import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { AuthModals } from "./AuthModals";
import { CopilotSection } from "./CopilotSection";
import { AnalyticsSection } from "./AnalyticsSection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { ScenariosSection } from "./ScenariosSection";
import { FooterSection } from "./FooterSection";
import { ArrowRight } from "lucide-react";

export function LandingPage() {
  const navigate = useNavigate();
  const [openSignUp, setOpenSignUp] = useState(false);

  const goToDashboard = () => {
    setOpenSignUp(false);
    navigate("/dashboard");
  };

  const openSignUpModal = () => {
    setOpenSignUp(true);
  };

  const closeModals = () => {
    setOpenSignUp(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="hero-glow-top" />
      <div className="hero-glow-orb" />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a
            href="#hero"
            className="flex items-center gap-3 text-xl font-semibold text-white"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
              RL
            </span>
            RiskLens
          </a>
          <div className="flex items-center gap-3">
            <button
              className="rounded-3xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10"
              onClick={goToDashboard}
            >
              Sign In
            </button>
            <Button
              onClick={openSignUpModal}
              variant="default"
              className="rounded-3xl bg-cyan-400 px-4 py-2 text-sm text-slate-950 shadow-lg shadow-cyan-500/10 hover:bg-cyan-300"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <main className="relative">
        <HeroSection onGetStarted={goToDashboard} onViewDemo={goToDashboard} />
        <FeaturesSection />
        <AnalyticsSection />
        <CopilotSection />
        <ScenariosSection />
        <section className="relative overflow-hidden px-6 py-28 sm:px-8 lg:px-10">
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#07111F]/80 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.95)] backdrop-blur-3xl">
            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            {/* Glow Ring */}
            <div className="absolute -right-20 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full border border-cyan-400/10 bg-cyan-400/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-12 px-8 py-14 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
              {/* LEFT CONTENT */}
              <div className="max-w-3xl">
                <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  Start building smarter portfolio decisions with AI.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                  RiskLens helps investment teams analyze portfolio exposure,
                  simulate market scenarios, and uncover hidden risks through
                  AI-powered analytics and intuitive visual intelligence.
                </p>

                {/* Features */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {[
                    "AI-powered risk insights",
                    "Interactive scenario simulations",
                    "Institutional-grade analytics",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT CTA */}
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />

                <Button
                  variant="default"
                  onClick={openSignUpModal}
                  className="group relative h-auto overflow-hidden rounded-full border border-cyan-300/20 bg-cyan-400 px-8 py-3 text-lg font-medium text-slate-950 shadow-[0_20px_80px_-20px_rgba(34,211,238,0.7)] transition-all duration-300 hover:scale-[1.03] hover:bg-cyan-300"
                >
                  {/* Shine */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                  <span className="relative z-10 flex items-center gap-3">
                    Schedule a Demo
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>

                <p className="mt-6 text-center text-sm text-slate-200">
                  Setup takes less than 2 minutes
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
      <AuthModals
        openSignIn={false}
        openSignUp={openSignUp}
        onClose={closeModals}
        onOpenSignIn={goToDashboard}
        onOpenSignUp={openSignUpModal}
      />
    </div>
  );
}
