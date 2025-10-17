import { AuthRepository } from "@/app/repository";
import { ValidateOtpCommand } from "@/presentation/models/auth/userValidateotp";

export function UserValidateOtp(authRepository: AuthRepository) {
  return async (validateOtpCommand: ValidateOtpCommand): Promise<boolean> => {
    const { email, code } = validateOtpCommand;
    if (!code) {
      throw new Error("El código es obligatorio");
    }
    return await authRepository.validateOtp(code, email);
  };
}
