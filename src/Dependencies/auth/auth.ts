import { Login } from "@/application/UseCase/auth/Login";
import { AuthApiRepository } from "@/infrastructure/api/auth/AuthApi";

export const LoginUseCase = Login(AuthApiRepository);
