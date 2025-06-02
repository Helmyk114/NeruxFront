import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeStore {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const themeStore = create<ThemeStore>((set) => ({
  theme: (localStorage.getItem("theme") as Theme) ?? "dark",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.replace(state.theme, newTheme);
      return { theme: newTheme };
    }),
  setTheme: (theme: Theme) => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.add(theme);
    set({ theme });
  },
}));
