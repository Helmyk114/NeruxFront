import { AuthResponse } from "../../../shared/types/AuthResponseTypes";
import { apiClient } from "../../http/ApiClient";
import { cookie } from "../../../shared/utils/cookies";
import { NavigateFunction } from "react-router-dom";
import { mapRol } from "../../../shared/utils/map/mapRol";
import { userStore } from "../../../store/userStore";

export const AuthServices = {
  login: async (credential: {
    username: string;
    password: string;
  }): Promise<AuthResponse> => {
    try {
      const authData = await apiClient.post<AuthResponse>("/login", credential);
      cookie.set("token", authData.token);
      const user = mapRol(authData.user);
      userStore.getState().setUser(user);
      return authData;
    } catch (error: unknown) {
      if (error && typeof error === "object" && "message" in error) {
        throw new Error(error.message as string);
      }
      throw new Error("Error durante el login");
    }
  },

  logout: async (navigate: NavigateFunction): Promise<void> => {
    cookie.remove("token");
    userStore.getState().clearUser();
    navigate("/", { replace: true });
  },

  newPassword: async (
    newPassword: string,
    confirmPassword: string
  ): Promise<void> => {
    try {
      await apiClient.patch("/first-password", {
        newPassword,
        confirmPassword,
      });
    } catch (error) {
      console.error("Error al cambiarla contraseña", error);
      throw new Error("Error al cambiar la contraseña");
    }
  },
};
