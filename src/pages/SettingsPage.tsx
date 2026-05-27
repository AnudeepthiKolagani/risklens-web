import { TerminalLayout } from "@/components/layout/TerminalLayout";
import { TerminalPanel } from "@/components/ui/terminal-panel";

export function SettingsPage() {
  return (
    <TerminalLayout title="Settings" subtitle="Preferences · Profile">
      <section className="space-y-3">
        <p className="analysis-section-title">Configuration</p>
        <div className="grid gap-3 lg:grid-cols-12">
          <TerminalPanel
            title="Profile"
            subtitle="Account"
            className="lg:col-span-4"
          >
            <div className="space-y-2 text-sm text-slate-400">
              <p>
                <span className="text-slate-500">Name: </span>
                Institutional User
              </p>
              <p>
                <span className="text-slate-500">Email: </span>
                user@example.com
              </p>
            </div>
          </TerminalPanel>

          <TerminalPanel
            title="Preferences"
            subtitle="Workspace"
            className="lg:col-span-8"
          >
            <div className="space-y-3 rounded-sm border border-white/10 bg-[#0a0e14]/80 p-4">
              <p className="text-sm font-medium text-slate-300">Appearance</p>
              <p className="text-sm text-slate-400">
                Dark theme is fixed for this application.
              </p>
            </div>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-sm font-medium text-slate-300">
                Email notifications
              </p>
              <label className="mt-2 inline-flex items-center gap-2 text-sm text-slate-400">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded-sm border-white/20"
                />
                Portfolio alerts
              </label>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-300">AI model</p>
              <p className="mt-1 text-sm text-slate-500">
                RiskLens-Alpha (simulated)
              </p>
            </div>
          </TerminalPanel>
        </div>
      </section>
    </TerminalLayout>
  );
}

export default SettingsPage;
