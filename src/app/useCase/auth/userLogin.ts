import { AuthRepository } from "@/app/repository";
import { useUserStore } from "@/common/store";
import { RedirectPath } from "@/common/utils";
import { Login } from "@/dominio";
import { LoginCommand } from "@/presentation/models";

export function UserLogin(authRepository: AuthRepository) {
  return async (loginCommand: LoginCommand): Promise<Login> => {
    const { username, password } = loginCommand;
    if (!username || !password) {
      throw new Error("El nombre de usuario y la contraseña son obligatorios");
    }

    const user = await authRepository.login(username, password);

    useUserStore.getState().setUser(user);

    return {
      token: user.token,
      redirect: RedirectPath(user),
      infoUser: user,
    };
  };
}
