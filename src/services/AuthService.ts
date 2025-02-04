import { apiClient } from "../infrastructure/http/ApiClient"

interface AuthResponse{
  token: string;
  user: {
    idUser: string;
    username: string;
    has_changed_password: number;
    business: string;
    state: number;
  }
}

export const AuthService = {
  async login(username: string, password: string): Promise<AuthResponse> {
    try {
      const respuesta = await apiClient.post('/auth/login', { username, password });
      return respuesta as AuthResponse;
    } catch (error) {
      throw new Error(`Error al iniciar sesion, ${error}`);
    }
  }
}