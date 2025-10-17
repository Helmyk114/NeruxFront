import { useMutation } from "@/presentation/components/hook";
import { ForgetPasswordCommand } from "@/presentation/models";
import { ForgetPasswordCase } from "@/providers";

export function useForgetPassword() {
  return useMutation<ForgetPasswordCommand, void>(ForgetPasswordCase);
}
