import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "radius-34": "34px",
      },
      fontFamily: {
        OpenSans: ['"Open Sans"', "sans-serif"],
        calligraffitti: ["Calligraffitti", "cursive"],
      },
      colors: {
        background1: "#121212",
        background2: " #8E05C226",
        purpleStart: "#8E05C2",
        purpleEnd: "#43025C",
        pinkButton: "#D50891",
        gris: "#D0D5DD",
        grisFondo: "#F2F2F2",
        grisFondo2: "#1F1F1F",
        grisBoton: "#2C2C2C",
        text: "rgba(242, 242, 242, 0.44)",
        textInput: "#B0B0B0CC",
        sombraPink: "#D50891",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
