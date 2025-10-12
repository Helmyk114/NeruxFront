import { useMutation } from "@/presentation/components/hook";
import { LoginCommand } from "@/presentation/models";
import { TokenManager } from "@/infraestructura/session";
import { Login } from "@/dominio";
import { LoginUseCase } from "@/dependencies/auth/auth";

export function useLogin() {
  return useMutation<LoginCommand, Login>(LoginUseCase, {
    onSuccess: (res) => {
      TokenManager.saveToken(res.token);
    },
  });
}
