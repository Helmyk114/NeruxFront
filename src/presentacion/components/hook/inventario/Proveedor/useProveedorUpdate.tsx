import { toastStore } from "@/store";
import { useMutation } from "../../api/useMutation";
import { UpdateProveedorCommand } from "@/application/Inventario/proveedores";
import { UpdateProveedorUseCase } from "@/Dependencies/inverntario/proveedor";

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
