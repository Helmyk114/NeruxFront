import { themeStore } from "@/store/themeSotre";
import { useEffect } from "react";

export function ThemeSwitcher() {
  const { theme, toggleTheme } = themeStore();

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
