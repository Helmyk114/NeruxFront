import {
  UserForgetPassword,
  UserLogin,
  UserNewPassword,
  UserValidateOtp,
} from "@/app/useCase";
import { AuthApiRepository } from "@/infraestructura/api";

export const LoginUseCase = UserLogin(AuthApiRepository);
export const ForgetPasswordCase = UserForgetPassword(AuthApiRepository);
export const ValidateOtpUseCase = UserValidateOtp(AuthApiRepository);
export const NewPasswordUseCase = UserNewPassword(AuthApiRepository);
