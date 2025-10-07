import { AuthRepository } from "@/domain/repository";
import { LoginRes } from "@/infrastructure/dto/auth/loginDto";
import { apiClient } from "@/infrastructure/http/ApiClient";
import { User } from "../../../domain/interface/auth/user";
import { LoginAdapter } from "@/mapping/auth/LoginAdapter";

export const AuthApiRepository: AuthRepository = {
  async login(username: string, password: string): Promise<User> {
    try {
      const res = await apiClient.post<LoginRes>("/login", {
        username,
        password,
      });
      const domainData = LoginAdapter(res);
      return domainData;
    } catch (error) {
      throw new Error(`Error al iniciar sesión: ${error}`);
    }
  },
};
