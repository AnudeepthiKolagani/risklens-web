import { footerLinks } from "./data";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-12 px-6 text-slate-300 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
              RL
            </div>
            <div>
              <p className="text-xl font-semibold text-white">RiskLens</p>
              <p className="text-sm text-slate-500">
                AI-driven portfolio intelligence.
              </p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Premium analytics and scenario simulations for institutional
            investors, risk teams, and wealth managers.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Product
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Portfolio Insights</li>
              <li>Risk Stress Tests</li>
              <li>AI Copilot</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Company
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Explore
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} RiskLens. All rights reserved.
      </div>
    </footer>
  );
}
