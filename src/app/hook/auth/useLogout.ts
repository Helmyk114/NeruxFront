import { useThemeStore, useUserStore } from "@/common/store";
import { TokenManager } from "@/infraestructura/session";
import { useRedirect } from "@/presentation/components/hook";
import { useCallback } from "react";

export function useLogout() {
  const clearUser = useUserStore((state) => state.clearUser);
  const setTheme = useThemeStore((state) => state.setTheme);
  const navigate = useRedirect();

  const logout = useCallback(() => {
    TokenManager.clearToken();
    clearUser();
    setTheme("dark");
    navigate("/", { replace: true });
  }, [clearUser, setTheme, navigate]);

  return logout;
}
