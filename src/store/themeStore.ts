import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "dark" | "light";

function applyThemeToDocument(theme: ThemeMode) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.dataset.terminalTheme = "dark";
  } else {
    root.classList.remove("dark");
    root.dataset.terminalTheme = "light";
  }
}

interface ThemeState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      setTheme: (theme) => {
        applyThemeToDocument(theme);
        set({ theme });
      },
      toggleTheme: () => {
        const next = get().theme === "dark" ? "light" : "dark";
        applyThemeToDocument(next);
        set({ theme: next });
      },
    }),
    {
      name: "risklens-theme",
      onRehydrateStorage: () => (state) => {
        if (state) applyThemeToDocument(state.theme);
      },
    },
  ),
);

export function initThemeFromStorage() {
  const stored = localStorage.getItem("risklens-theme");
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as { state?: { theme?: ThemeMode } };
      const theme = parsed.state?.theme ?? "dark";
      applyThemeToDocument(theme);
      return theme;
    } catch {
      applyThemeToDocument("dark");
      return "dark" as ThemeMode;
    }
  }
  applyThemeToDocument("dark");
  return "dark" as ThemeMode;
}
