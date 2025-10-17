import { useToastStore } from "@/common/store";
import { useMutation } from "@/presentation/components/hook";
import { CreateBusinessCommand } from "@/presentation/models";
import { CreateBusinessUseCase } from "@/providers/business/business";

export function useCreateBusiness(onSuccess?: () => void)  {
  const newToast = useToastStore((state) => state.newToast);

  return useMutation<CreateBusinessCommand, void>(CreateBusinessUseCase, {
    onSuccess: () => {
      newToast({
        mensaje: "Empresa creada exitosamente",
        tipo: "success",
      });
      onSuccess?.();
    },
    onError: () => {
      newToast({
        mensaje: "No se pudo crear la empresa. Inténtalo más tarde.",
        tipo: "error",
      });
    },
  });
}
