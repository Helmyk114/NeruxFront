import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { AppRouter } from "./routes/AppRoutes";
import "./index.css";
import { AuthProvider } from "./presentacion/provider/authProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <AuthProvider>
        <main className="dark text-foreground bg-background-one">
          <AppRouter />
        </main>
      </AuthProvider>
    </HeroUIProvider>
  </StrictMode>
);
