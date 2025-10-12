import { User } from "@/dominio";

export interface AuthRepository {
  login: (username: string, password: string) => Promise<User>;
  // logout: () => Promise<void>;
  // changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
  // forgotPassword: (email: string) => Promise<void>;
  // resetPassword: (token: string, newPassword: string) => Promise<void>;
  // getCurrentUser: () => Promise<void>;
}