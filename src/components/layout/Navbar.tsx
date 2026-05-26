import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { formatBytes } from "@/hooks/useFileUpload";

interface NavbarProps {
  title?: string;
  subtitle?: string;
  fileCount?: number;
  totalSize?: number;
}

export function Navbar({
  title = "Command Center",
  subtitle,
  fileCount = 0,
  totalSize = 0,
}: NavbarProps) {
  return (
    <header className="border-b border-[#ff9900]/20 pb-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ff9900]">
            RiskLens Terminal
          </p>
          <h1 className="mt-1 text-xl font-semibold text-white">{title}</h1>
          {subtitle && <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />
            <Input
              placeholder="Search…"
              className="h-8 w-48 rounded-sm border-white/10 bg-black/40 pl-8 text-sm lg:w-56"
            />
          </div>
          {fileCount > 0 && (
            <span className="text-xs text-slate-500">
              {fileCount} · {formatBytes(totalSize)}
            </span>
          )}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-white/10 text-slate-500 hover:text-slate-300"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>
          <div className="flex h-8 items-center gap-2 rounded-sm border border-white/10 bg-black/40 px-2">
            <User className="h-3.5 w-3.5 text-slate-500" />
            <span className="text-xs text-slate-400">Analyst</span>
          </div>
        </div>
      </div>
    </header>
  );
}
