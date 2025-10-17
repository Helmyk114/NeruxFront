import { useMutation } from "@/presentation/components/hook";
import { NewPasswordCommand } from "@/presentation/models";
import { NewPasswordUseCase } from "@/providers";

export function useNewPassword(onSuccess?: () => void) {
  return useMutation<NewPasswordCommand, void>(NewPasswordUseCase, {
    onSuccess: () => {
      onSuccess?.();
    },

    onError: () => {
      console.log("Error al cambiar la contraseña");
    },
  });

}