import { DashboardLayout } from "../layouts/DashboardLayout";
import { SectionHeader } from "../components/shared/SectionHeader";
import { motion } from "framer-motion";

export function SettingsPage() {
  return (
    <DashboardLayout fileCount={2} totalSize={1024}>
      <div className="space-y-6">
        <SectionHeader
          title="Settings"
          subtitle="Manage preferences and connections"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-1 rounded-2xl border border-white/6 bg-slate-950/60 p-6 shadow-lg backdrop-blur"
          >
            <h4 className="text-sm font-medium text-slate-300">Profile</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>Name: Institutional User</p>
              <p>Email: user@example.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-2 rounded-2xl border border-white/6 bg-slate-950/60 p-6 shadow-lg backdrop-blur"
          >
            <h4 className="text-sm font-medium text-slate-300">Preferences</h4>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-white/6 p-4">
                <p className="text-sm text-slate-300">Email notifications</p>
                <div className="mt-2">
                  <label className="inline-flex items-center gap-2">
                    <input type="checkbox" defaultChecked className="h-4 w-4" />
                    <span className="text-sm text-slate-300">
                      Portfolio alerts
                    </span>
                  </label>
                </div>
              </div>
              <div className="rounded-md border border-white/6 p-4">
                <p className="text-sm text-slate-300">AI Settings</p>
                <p className="mt-2 text-sm text-slate-400">
                  Model: RiskLens-Alpha (simulated)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SettingsPage;
