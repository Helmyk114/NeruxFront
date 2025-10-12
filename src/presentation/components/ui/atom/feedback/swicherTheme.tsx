import { useThemeStore } from "@/common/store";
import { useEffect } from "react";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      Cambiar a modo {theme === "dark" ? "claro" : "oscuro"}
    </button>
  );
}
