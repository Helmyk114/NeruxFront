import { LoginCommand, LoginResult } from "@/application/auth";
import { useMutation } from "../api/useMutation";
import { LoginUseCase } from "@/Dependencies/auth/auth";
import { SessionManager } from "@/infrastructure/session/SessionManager";

export function useLogin() {
  return useMutation<LoginCommand, LoginResult>(LoginUseCase, {
    onSuccess: (res) => {
      SessionManager.saveToken(res.token);
    }
  })
}