import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { AppRouter } from "./routes/AppRoutes";
import { setupInterceptors } from "./infrastructure/http/interceptors";
import "./index.css";

setupInterceptors();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <ToastProvider placement="top-right" />
      <AppRouter />
    </HeroUIProvider>
  </StrictMode>
);
