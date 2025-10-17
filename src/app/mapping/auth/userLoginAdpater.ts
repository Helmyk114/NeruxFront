import { UserRole } from "@/common/constant/enum";
import { UserState } from "@/common/types";
import { User } from "@/dominio";
import { LoginApi, ValidateOtpApi } from "@/infraestructura/dto";

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

export const LoginAdapter = {
  toUiLogin(user: LoginApi): User {
    const rol = mapRol[user.user.role] || "Unknown";
    const state = mapState[user.user.state] || "Unknown";

    return {
      id: user.user.id,
      username: user.user.username,
      has_changed_password: user.user.has_changed_password,
      role: rol,
      state,
      business: user.user.business || null,
      token: user.token,
    };
  },
  toUiValidateOtp(api: ValidateOtpApi): boolean {
    return api.data
  }
};
