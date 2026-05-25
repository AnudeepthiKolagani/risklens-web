import { useState } from "react";
import {
  Activity,
  BarChart3,
  Layers,
  MessageSquare,
  ShieldCheck,
  Settings2,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Activity },
  { label: "Portfolio", icon: Layers },
  { label: "Analysis", icon: BarChart3 },
  { label: "Scenarios", icon: ShieldCheck },
  { label: "AI Copilot", icon: MessageSquare },
  { label: "Settings", icon: Settings2 },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-full max-w-[300px] self-start overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-3xl lg:block">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
          RiskLens
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Portfolio cockpit
        </h2>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.label === activeItem;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setActiveItem(item.label)}
              className={`group flex w-full items-center gap-4 rounded-3xl border px-4 py-3 text-left transition-all duration-200 ${
                isActive
                  ? "border-cyan-300/40 bg-cyan-300/10 text-white shadow-[0_20px_60px_-30px_rgba(34,211,238,0.32)]"
                  : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-cyan-300/20 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl transition ${
                  isActive
                    ? "bg-cyan-300/15 text-cyan-300"
                    : "bg-slate-900 text-slate-400"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium">{item.label}</p>
                {isActive ? (
                  <p className="text-xs text-cyan-200/80">Active</p>
                ) : null}
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
