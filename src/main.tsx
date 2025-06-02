import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { AppRouter } from "./routes/AppRoutes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
        <AppRouter />
    </HeroUIProvider>
  </StrictMode>
);
