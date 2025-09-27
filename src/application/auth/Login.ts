
import { User } from "@/domain/interface";
import { AuthRepository } from "@/domain/repository";
import { RedirectPath } from "@/infrastructure/services/auth/Redirect.service";
import { userStore } from "@/store";

export type LoginCommand = {
  username: string;
  password: string;
};

export type LoginResult = {
  token: string;
  redirect: string;
  infoUser: User;
}

export function Login(authRepository: AuthRepository) {
  return async (loginCommand: LoginCommand): Promise<LoginResult> => {
    const { username, password } = loginCommand;
    if (!username || !password) {
      throw new Error("El nombre de usuario y la contraseña son obligatorios");
    }

    const user = await authRepository.login(username, password);

    userStore.getState().setUser(user);

    return {
      token: user.token,
      redirect: RedirectPath(user),
      infoUser: user,
    };
  };
}
