import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import AppRouter from "./routes/AppRoutes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <div className="w-screen h-screen">
        <AppRouter />
      </div>
    </NextUIProvider>
  </StrictMode>
);
