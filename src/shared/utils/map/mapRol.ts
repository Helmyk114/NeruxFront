import { Rol, User } from "../../types/AuthResponseTypes";

export const mapRol = (user: User): User => {
  let rol: Rol;
  switch (user.role) {
    case 1:
      rol = "SuperAdmin";
      break;
    case 2:
      rol = "Admin";
      break;
    case 3:
      rol = "empleado";
      break;
    default:
      rol = "empleado";
  }

  return {
    idUser: user.idUser,
    role: rol,
    has_changed_password: user.has_changed_password,
    business: user.business || null,
    state: user.state,
  };
};
