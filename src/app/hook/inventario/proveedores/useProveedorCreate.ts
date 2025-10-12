import { useToastStore } from "@/common/store";
import { CreateProveedorUseCase } from "@/providers";
import { useMutation } from "@/presentation/components/hook";
import { CreateProveedorCommand } from "@/presentation/models";

export function useCreateProveedor() {
  const newToast = useToastStore((state) => state.newToast);

  return useMutation<CreateProveedorCommand, void>(CreateProveedorUseCase, {
    onSuccess: () => {
      newToast({
        mensaje: "Proveedor creado exitosamente",
        tipo: "success",
      });
    },

    onError: () => {
      newToast({
        mensaje: "Error al crear el proveedor",
        tipo: "error",
      });
    },
  });
}