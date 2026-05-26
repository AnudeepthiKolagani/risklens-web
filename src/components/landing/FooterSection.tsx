import { ArrowUpRight, Link, Mail } from "lucide-react";
import { footerLinks } from "./data";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050B14] px-6 py-20 text-slate-300 sm:px-8 lg:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TOP SECTION */}
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div className="flex flex-col gap-6 text-left">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 text-lg font-semibold text-cyan-300 shadow-[0_10px_40px_-10px_rgba(34,211,238,0.5)]">
                RL
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white">RiskLens</h2>

                <p className="mt-1 text-sm text-slate-500">
                  AI-powered portfolio intelligence
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              Modern portfolio risk analysis platform designed for investment
              teams, wealth managers, and institutional decision-makers. Analyze
              exposure, simulate market scenarios, and uncover hidden portfolio
              risks with AI-driven insights.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              {[
                {
                  icon: Link,
                },
                {
                  icon: Link,
                },
                {
                  icon: Link,
                },
                {
                  icon: Mail,
                },
              ].map((item, index) => (
                <button
                  key={index}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <item.icon className="h-5 w-5 text-slate-400 transition-colors duration-300 group-hover:text-cyan-300" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid gap-10 sm:grid-cols-3 text-left">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Product
              </h3>

              <ul className="mt-6 space-y-4">
                {[
                  "Portfolio Analytics",
                  "Risk Monitoring",
                  "AI Copilot",
                  "Scenario Engine",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      <span>{item}</span>

                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Company
              </h3>

              <ul className="mt-6 space-y-4">
                {["About", "Careers", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      <span>{item}</span>

                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                Resources
              </h3>

              <ul className="mt-6 space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      <span>{link.label}</span>

                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RiskLens. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-slate-300">
              Privacy Policy
            </a>

            <a href="#" className="transition-colors hover:text-slate-300">
              Terms of Service
            </a>

            <a href="#" className="transition-colors hover:text-slate-300">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
