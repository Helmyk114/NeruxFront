import { AxiosError } from "axios";
import { IAuthRepository } from "../../domain/interface/IAuthRepsository";
import { AuthResponse } from "../../shared/types/AuthResponse";
import { apiClient } from "../http/ApiClient";

export class AuthService implements IAuthRepository {
  async login(username: string, password: string): Promise<AuthResponse> {
    try {
      const respuesta = await apiClient.post('/auth/login', { username, password });
      return respuesta as AuthResponse;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        if (!error.response) {
          throw new Error('Error de conexión: No se pudo contactar al servidor');
        }

        const status = error.response.status;
        const message = (error.response.data as { error?: string })?.error

        switch(status) {
          case 401:
            throw new Error(message || 'Credenciales incorrectas');
          case 400:
            throw new Error(message || 'Datos de solicitud inválidos');
          case 500:
            throw new Error(message || 'Error interno del servidor');
          default:
            throw new Error(message || `Error del servidor (código ${status})`);
        }
      }
      throw new Error('Error desconocido durante el login');
    }
  }
}

// Type guard para AxiosError
function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}