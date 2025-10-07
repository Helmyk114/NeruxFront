import { LoginCommand, LoginResult } from "@/application/UseCase/auth";
import { LoginUseCase } from "@/dependencies/auth/auth";
import { SessionManager } from "@/infrastructure/session/SessionManager";
import { useMutation } from "@/presentacion/components/hook";

export function useLogin() {
  return useMutation<LoginCommand, LoginResult>(LoginUseCase, {
    onSuccess: (res) => {
      SessionManager.saveToken(res.token);
    },
  });
}
