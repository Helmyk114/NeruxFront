import { User } from "@/dominio";
import { LoginRoutes, UserRole } from "../constant/enum";

const handlerBusinessUser = (user: User): string =>
  user.business ? LoginRoutes.DASHBOARD : LoginRoutes.CREATE_BUSINESS;

export const RedirectPath = (user: User): string => {
  if (user.has_changed_password === true) {
    return LoginRoutes.NEW_PASSWORD;
  }

  switch (user.role) {
    case UserRole.SUPERADMIN:
      return LoginRoutes.HOME;
    case UserRole.ADMIN:
      return handlerBusinessUser(user);
    default:
      throw new Error("Rol de usuario no válido");
  }
};
