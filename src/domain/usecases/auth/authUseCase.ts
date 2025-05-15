import { AuthServices } from "../../../infrastructure/services/auth/Auth.service";
import { RedirectPath } from "../../../infrastructure/services/auth/Redirect.service";
import { User } from "../../../shared/types/AuthResponseTypes";

export const authUseCase = {
  login: async (credential: {
    username: string;
    password: string;
  }): Promise<{
    token: string;
    redirect: string;
    infoUser: User;
  }> => {
    if (!credential.username || !credential.password) {
      throw new Error("El nombre de usuario y la contraseña son obligatorios");
    }

    const userData = await AuthServices.login(credential);

    return {
      token: userData.token,
      redirect: RedirectPath(userData.user),
      infoUser: userData.user,
    };
  },

  newPassword: async (
    newPassword: string,
    confirmPassword: string
  ): Promise<void> => {
    if (!newPassword || !confirmPassword) {
      throw new Error("La contraseña y la confirmación son obligatorias");
    }
    try {
      await AuthServices.newPassword(newPassword, confirmPassword);
    } catch (error) {
      throw new Error(`Error al cambiar la contraseña ${error}`);
    }
  },
};
