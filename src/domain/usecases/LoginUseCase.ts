import { RedirectPath } from "../../infrastructure/services/auth/Redirect.service";
import { userAdapter, UserAdapter } from "../adapter/user.adapter";
import { IAuthRepository } from "../interface/IAuthRepsository";

export class LoginUseCase {
  constructor(private authRepository: IAuthRepository) {}
  async execute(
    username: string,
    password: string
  ): Promise<{
    token: string;
    redirect: string;
    infoUser: UserAdapter;
  }> {
    if (!username || !password) {
      throw new Error("El nombre de usuario y la contraseña son obligatorios");
    }

    const userData = await this.authRepository.login(username, password);

    return {
      token: userData.token,
      redirect: RedirectPath(userData.user),
      infoUser: userAdapter(userData.user),
    };
  }
}
