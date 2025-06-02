import { useEffect } from "react";
import { themeStore } from "../../../../../store/themeSotre";


export default function ThemeSwitcher() {
  const { theme, toggleTheme } = themeStore();

  // Al montar, aplicamos la clase
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      Cambiar a modo {theme === "dark" ? "oscuro" : "claro"}
    </button>
  );
}
