import { AxiosError } from "axios";
import { IAuthRepository } from "../../domain/interface/IAuthRepsository";
import { AuthResponse } from "../../shared/types/AuthResponse";
import { apiClient } from "../http/ApiClient";
import { cookie } from "../../shared/utils/cookies";

export class AuthService implements IAuthRepository {
  newPassword(newPassword: string, confirmPassword: string): Promise<void> {
    try {
      const respuesta = apiClient.patch('/first-password', { newPassword, confirmPassword });

      return respuesta as Promise<void>;
    } catch (error) {
      console.log(error);
      throw new Error(`Error al cambiar la contraseña ${error}`);
    }
  }
  async login(username: string, password: string): Promise<AuthResponse> {
    try {
      const respuesta: AuthResponse = await apiClient.post('/login', { username, password });
      console.log(respuesta);
      if(respuesta.token) {
        cookie.set('token', respuesta.token);
      }
      return respuesta;
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