import { ReactNode } from "react";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Navbar } from "../components/dashboard/Navbar";

interface DashboardLayoutProps {
  children: ReactNode;
  fileCount: number;
  totalSize: number;
}

export function DashboardLayout({
  children,
  fileCount,
  totalSize,
}: DashboardLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_40%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(168,85,247,0.18),_transparent_50%)] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.12),_transparent_48%)] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:grid-cols-[300px_1fr]">
        <Sidebar />
        <div className="space-y-6">
          <Navbar fileCount={fileCount} totalSize={totalSize} />
          <main className="space-y-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
