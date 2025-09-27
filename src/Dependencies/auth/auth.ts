import { Login } from "@/application/auth/Login";
import { AuthApiRepository } from "@/infrastructure/api/auth/AuthApi";


export const LoginUseCase = Login(AuthApiRepository)