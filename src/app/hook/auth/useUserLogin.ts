import { useMutation } from "@/presentation/components/hook";
import { LoginCommand } from "@/presentation/models";
import { TokenManager } from "@/infraestructura/session";
import { LoginUseCase } from "@/dependencies";
import { Login } from "@/dominio";

export function useLogin() {
  return useMutation<LoginCommand, Login>(LoginUseCase, {
    onSuccess: (res) => {
      TokenManager.saveToken(res.token);
    },
  });
}
