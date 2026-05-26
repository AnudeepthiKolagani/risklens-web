import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Lightbulb,
  Settings2,
  ShieldAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "Analysis", icon: BarChart3, to: "/analysis" },
  { label: "Risk reports", icon: ShieldAlert, to: "/scenarios" },
  { label: "Insights", icon: Lightbulb, to: "/ai-copilot" },
  { label: "Settings", icon: Settings2, to: "/settings" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 52 : 200 }}
      className="hidden shrink-0 flex-col bloomberg-panel lg:flex"
    >
      <div className="flex items-center justify-between border-b border-[#ff9900]/20 px-2 py-2">
        {!collapsed && (
          <span className="px-1 text-xs font-semibold text-[#ff9900]">MENU</span>
        )}
        <button
          type="button"
          onClick={onToggle}
          className="flex h-7 w-7 items-center justify-center text-slate-500 hover:text-[#ff9900]"
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
      <nav className="flex-1 p-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                cn(
                  "mb-0.5 flex items-center gap-2 rounded-sm px-2 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-[#ff9900]/15 font-medium text-[#ff9900]"
                    : "text-slate-500 hover:bg-white/5 hover:text-slate-300",
                  collapsed && "justify-center",
                )
              }
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          );
        })}
      </nav>
    </motion.aside>
  );
}
