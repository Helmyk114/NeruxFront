import { AuthResponse } from "../../shared/types/AuthResponseTypes";

export interface IAuthRepository {
  login(username: string, password: string): Promise<AuthResponse>;
  newPassword(newPassword: string, confirmPassword: string): Promise<void>;
}
