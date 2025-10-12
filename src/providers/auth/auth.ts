import { UserLogin } from "@/app/useCase";
import { AuthApiRepository } from "@/infraestructura/api";

export const LoginUseCase = UserLogin(AuthApiRepository);
