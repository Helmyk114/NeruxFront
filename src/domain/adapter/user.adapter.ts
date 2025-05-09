import { User } from "../../shared/types/AuthResponseTypes";

export interface UserAdapter {
  idUser: string;
  has_changed_password: number;
  business: string;
  state: number;
  role: "SuperAdmin" | "Admin" | "User";
}

export function userAdapter(user: User): UserAdapter {
  return{
    idUser: user.idUser,
    has_changed_password: user.has_changed_password,
    business: user.business,
    state: user.state,
    role: mapRole(user.role),
  }
}

function mapRole(role: number): UserAdapter["role"] {
  switch (role) {
    case 1:
      return "SuperAdmin";
    case 2:
      return "Admin";
    case 3:
      return "User";
    default:
      throw new Error(`Rol desconocido: ${role}`);
  }
}