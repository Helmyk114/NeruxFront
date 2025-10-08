import { toastStore } from "@/store";
import { useMutation } from "@/presentacion/components/hook";
import { UpdateProveedorCommand } from "@/presentacion/models/inventario/ProveedorModels";
import { UpdateProveedorUseCase } from "@/dependencies/inventario/proveedor";

export function useUpdateProveedor() {
  const newToast = toastStore((state) => state.newToast);

  return useMutation<UpdateProveedorCommand, void>(UpdateProveedorUseCase, {
    onSuccess: () => {
      newToast({
        mensaje: "Proveedor actualizado exitosamente",
        tipo: "success",
      });
    },

    onError: () => {
      newToast({
        mensaje: "Error al actualizar el proveedor",
        tipo: "error",
      });
    },
  });
}
