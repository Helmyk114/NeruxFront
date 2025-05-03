import { User } from "../../../shared/types/AuthResponseTypes";
import { LoginRoutes, UserRole } from "../../../shared/types/loginTypes";

const handlerBusinessUser = (user: User): string =>
  user.business ? LoginRoutes.DASHBOARD : LoginRoutes.CREATE_BUSINESS;

export const RedirectPath = (user: User): string => {
  if (user.has_changed_password === 1) {
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
