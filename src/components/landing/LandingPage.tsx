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
        <section className="px-6 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur-3xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                  Get started
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Start your institutional AI risk journey.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Sign up for a guided demonstration and see how RiskLens
                  transforms portfolio oversight with AI, automation, and
                  elegant dashboards.
                </p>
              </div>
              <Button
                variant="default"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-base text-slate-950 shadow-xl shadow-cyan-500/15 hover:bg-cyan-300"
                onClick={openSignUpModal}
              >
                Schedule a demo
                <ArrowRight className="h-4 w-4" />
              </Button>
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
