import { RedirectPath } from "../../infrastructure/services/auth/Redirect.service";
import { User } from "../../shared/types/AuthResponseTypes";
import { IAuthRepository } from "../interface/IAuthRepsository";

export class LoginUseCase {
  constructor(private authRepository: IAuthRepository) {}
  async execute(
    username: string,
    password: string
  ): Promise<{
    token: string;
    redirect: string;
    infoUser: Omit<User, "has_changed_password">;
  }> {
    if (!username || !password) {
      throw new Error("El nombre de usuario y la contraseña son obligatorios");
    }

    const userData = await this.authRepository.login(username, password);

    return {
      token: userData.token,
      redirect: RedirectPath(userData.user),
      infoUser: {
        idUser: userData.user.idUser,
        username: userData.user.username,
        business: userData.user.business,
        state: userData.user.state,
        role: userData.user.role,
      },
    };
  }
}
