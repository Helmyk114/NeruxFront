import { AuthRepository } from "@/app/repository";
import { NewPasswordCommand } from "@/presentation/models";

export function UserNewPassword(authRepository: AuthRepository) {
  return async (newPasswordCommand: NewPasswordCommand): Promise<void> => {
    const { newPassword, confirmPassword } = newPasswordCommand;
    if (!newPassword || !confirmPassword) {
      throw new Error("La contraseña y la confirmación son obligatorias");
    }
    await authRepository.newPassword(newPasswordCommand);
  };
}
