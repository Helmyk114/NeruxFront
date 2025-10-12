import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { AppRouter } from "./routes/AppRoutes";
import { AxiosInterceptor } from "./infraestructura/http";
import "./index.css";

AxiosInterceptor();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <ToastProvider placement="top-right" />
      <AppRouter />
    </HeroUIProvider>
  </StrictMode>
);
