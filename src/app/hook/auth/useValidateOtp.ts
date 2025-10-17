
import { useMutation } from "@/presentation/components/hook";
import { ValidateOtpCommand } from "@/presentation/models";
import { ValidateOtpUseCase } from "@/providers";

export function useValidateOtp() {
  return useMutation<ValidateOtpCommand, boolean>(ValidateOtpUseCase)
}