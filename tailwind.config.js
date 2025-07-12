import { heroui } from "@heroui/react";
import { colors } from "./src/theme/Colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "radius-34": "34px",
      },
      fontFamily: {
        OpenSans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        texts: { ...colors.texts},
        background: { ...colors.background },
        sidebar: { ...colors.sidebar },
        input: { ...colors.input },
        marca: { ...colors.marca },
        
        semantic: { ...colors.semantic },
        base: { ...colors.base },
        typography: { ...colors.typography },
        brand: { ...colors.brand },
        button: { ...colors.button },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
