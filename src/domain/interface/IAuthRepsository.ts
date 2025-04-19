import { AuthResponse } from "../../shared/types/AuthResponse";

export interface IAuthRepository {
  login(username: string, password: string): Promise<AuthResponse>;
}