import { LoginRes } from "../../infrastructure/dto/auth/loginDto";
import { User, UserState } from "@/domain/interface";
import { UserRole } from "@/domain/interface/auth/userRole";

const mapRol: Record<string, UserRole> = {
  "1": UserRole.SUPERADMIN,
  "2": UserRole.ADMIN,
  "3": UserRole.WORKER,
};

const mapState: Record<string, UserState> = {
  "1": "Activo",
  "2": "Inactivo",
  "3": "Suspendido",
};

export const LoginAdapter = (user: LoginRes): User => {
  const rol = mapRol[user.user.role] || "Unknown";
  const state = mapState[user.user.state] || "Unknown";

  return {
    id: user.user.id,
    username: user.user.username,
    has_changed_password: user.user.has_changed_password,
    role: rol,
    state: state,
    business: user.user.business || null,
    token: user.token,
  };
};
