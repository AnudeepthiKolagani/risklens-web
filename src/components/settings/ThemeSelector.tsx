import { Monitor, Moon, Sun } from "lucide-react";
import { useThemeStore, type ThemeMode } from "@/store/themeStore";
import { cn } from "@/lib/utils";

const optionBase =
  "flex flex-col items-center gap-2 rounded-sm border px-3 py-4 text-sm font-medium transition-colors";

const options: { id: ThemeMode; label: string; icon: typeof Sun }[] = [
  { id: "dark", label: "Dark", icon: Moon },
  { id: "light", label: "Light", icon: Sun },
];

export function ThemeSelector() {
  const { theme, setTheme } = useThemeStore();
  const isLight = theme === "light";

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Monitor className="h-4 w-4 text-cyan-400" />
        <span>Appearance</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {options.map(({ id, label, icon: Icon }) => {
          const active = theme === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setTheme(id)}
              className={cn(
                optionBase,
                active
                  ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
                  : isLight
                    ? "border-slate-300 bg-slate-100 text-slate-800 hover:border-slate-400"
                    : "border-white/10 bg-[#0a0e14] text-slate-400 hover:border-white/20 hover:text-slate-200",
              )}
            >
              <Icon className="h-5 w-5" />
              {label}
            </button>
          );
        })}
      </div>
      <p className="text-sm text-slate-500">
        Dark is the default terminal view. Light mode adjusts panels and
        backgrounds while keeping chart and accent colors.
      </p>
    </div>
  );
}
