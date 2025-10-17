import { LoginAdapter } from "@/app/mapping";
import { AuthRepository } from "@/app/repository";
import { User } from "@/dominio";
import { LoginApi } from "@/infraestructura/dto";
import { apiClient } from "@/infraestructura/http";
import { AuthApiAdapter } from "@/infraestructura/mappings";
import { NewPasswordCommand } from "@/presentation/models";

export const AuthApiRepository: AuthRepository = {
  async login(username: string, password: string): Promise<User> {
    try {
      const apiData = AuthApiAdapter.toApiLogin({ username, password });
      const res = await apiClient.post<LoginApi>("/login", apiData);
      const domainData = LoginAdapter.toUiLogin(res);
      return domainData;
    } catch (error) {
      throw new Error(`Error al iniciar sesión: ${error}`);
    }
  },

  async forgotPassword(email: string): Promise<void> {
    try {
      const apiData = AuthApiAdapter.toApiForgetPassword({ email });
      await apiClient.post("/forget/password", apiData);
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  },

  async validateOtp(code: string, email: string): Promise<boolean> {
    try {
      const apiData = AuthApiAdapter.toApiValidateOtp({ code, email });
      const res = await apiClient.post<boolean>("/validate", apiData);
      return res;
    } catch (error) {
      throw new Error(`Error al validar el OTP: ${error}`);
    }
  },

  async newPassword(newPasswordCommand: NewPasswordCommand): Promise<void> {
    try {
      const apiData = AuthApiAdapter.toApiNewPassword(newPasswordCommand);
      if (!apiData.email) {
        await apiClient.patch("/first/password", apiData);
      } else {
        await apiClient.patch("/reset/password", apiData);
      }
    } catch (error) {
      throw new Error(`Error al cambiar la contraseña: ${error}`);
    }
  },
};
