import { AuthServices, RedirectPath } from "@/infrastructure";
import { cookie, mapUser, User } from "@/shared";
import { userStore } from "@/store";

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

    cookie.set("token", userData.token);
    const user = mapUser(userData.user);
    userStore.getState().setUser(user);

    return {
      token: userData.token,
      redirect: RedirectPath(user),
      infoUser: user,
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
