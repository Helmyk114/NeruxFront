import { LoginAdapter } from "@/app/mapping";
import { AuthRepository } from "@/app/repository";
import { User } from '@/dominio';
import { LoginApi } from "@/infraestructura/dto";
import { apiClient } from "@/infraestructura/http";

export const AuthApiRepository: AuthRepository = {
  async login(username: string, password: string): Promise<User> {
    try {
      const res = await apiClient.post<LoginApi>("/login", {
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