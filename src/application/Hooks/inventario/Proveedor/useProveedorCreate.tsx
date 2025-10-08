import { toastStore } from "@/store";
import { CreateProveedorUseCase } from "@/dependencies/inventario/proveedor";
import { CreateProveedorCommand } from "@/presentacion/models";
import { useMutation } from "@/presentacion/components/hook";

export function useCreateProveedor() {
  const newToast = toastStore((state) => state.newToast);

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
