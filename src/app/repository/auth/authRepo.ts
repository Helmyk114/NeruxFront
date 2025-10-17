import { User } from "@/dominio";
import { NewPasswordCommand } from "@/presentation/models";

export interface AuthRepository {
  login: (username: string, password: string) => Promise<User>;
  forgotPassword: (email: string) => Promise<void>;
  validateOtp: (otp: string, email: string) => Promise<boolean>;
  newPassword: (newPasswordCommand: NewPasswordCommand) => Promise<void>;
}
