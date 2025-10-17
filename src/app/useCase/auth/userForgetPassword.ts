import { AuthRepository } from "@/app/repository";
import { ForgetPasswordCommand } from "@/presentation/models";

export function UserForgetPassword(authRepository: AuthRepository) {
  return async (forgetPasswordCommand: ForgetPasswordCommand): Promise<void> => {
    const { email } = forgetPasswordCommand;
    if (!email) {
      throw new Error("El correo electrónico es obligatorio");
    }
    await authRepository.forgotPassword(email);
  };
}
