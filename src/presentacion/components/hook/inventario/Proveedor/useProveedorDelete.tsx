import { toastStore } from "@/store";
import { useMutation } from "../../api/useMutation";
import { DeleteProveedorCommand } from "@/application/Inventario/proveedores";
import { DeleteProveedorUseCase } from "@/Dependencies/inverntario/proveedor";

export function useDeleteProveedor(onSuccess: () => void) {
  const newToast = toastStore((state) => state.newToast);

  return useMutation<DeleteProveedorCommand, void>(DeleteProveedorUseCase, {
    onSuccess: () => {
      newToast({
        mensaje: "Proveedor eliminado exitosamente",
        tipo: "success",
      });
      onSuccess();
    },

    onError: () => {
      newToast({
        mensaje: "Error al eliminar el proveedor",
        tipo: "error",
      });
    },
  });
}
