import { User, UserApi } from "../../types/AuthResponseTypes";
import { UserRole } from "../../types/loginTypes";

const mapRol: Record<number, UserRole> = {
  1: UserRole.SUPERADMIN,
  2: UserRole.ADMIN,
  3: UserRole.WORKER,
}

const mapState: Record<number, string> = {
  1: "Activo",
  2: "Inactivo",
  3: "Suspendido",
}

export const mapUser = (user: UserApi): User => {
  const rol = mapRol[user.role] || "Unknown";
  const state = mapState[user.state] || "Unknown";

  return {
    idUser: user.idUser,
    role: rol,
    has_changed_password: user.has_changed_password,
    business: user.business || null,
    state: state,
  };
};
