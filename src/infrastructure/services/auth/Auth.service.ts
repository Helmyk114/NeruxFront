import { AuthResponse } from "../../../shared/types/AuthResponseTypes";
import { cookie } from "../../../shared/utils/cookies";
import { NavigateFunction } from "react-router-dom";
import { userStore } from "../../../store/userStore";
import { themeStore } from "../../../store/themeSotre";
import { Axios } from "../../http/Axios";

export const AuthServices = {
  login: async (credential: {
    username: string;
    password: string;
  }): Promise<AuthResponse> => {
    try {
      const authData = await Axios.post<AuthResponse>("/login", credential);
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
    themeStore.getState().setTheme("dark");
    navigate("/", { replace: true });
  },

  newPassword: async (
    newPassword: string,
    confirmPassword: string
  ): Promise<void> => {
    try {
      await Axios.patch("/first-password", {
        newPassword,
        confirmPassword,
      });
    } catch (error) {
      console.error("Error al cambiarla contraseña", error);
      throw new Error("Error al cambiar la contraseña");
    }
  },
};
