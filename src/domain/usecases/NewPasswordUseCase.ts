import { IAuthRepository } from "../interface/IAuthRepsository";

export class NewPasswordUseCase {
  constructor(private authRepository: IAuthRepository) {}
  async execute(
    newPassword: string,
    confirmPassword: string,
  ): Promise<void> {
    if(!newPassword || !confirmPassword) {
      throw new Error("La contraseña y la confirmación son obligatorias");
    }
    try {
      await this.authRepository.newPassword(newPassword, confirmPassword);
    } catch (error) {
      throw new Error(`Error al cambiar la contraseña ${error}`);
    }
  }
}