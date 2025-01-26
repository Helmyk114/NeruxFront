import { AxiosResponse } from "axios";
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
      const respuesta: AxiosResponse<AuthResponse>  = await apiClient.post('/login', { username, password });
      console.log(respuesta.data);
      console.log(respuesta);
      return respuesta.data;
    } catch (error) {
      throw new Error(`Error al iniciar sesion, ${error}`);
    }
  }
}