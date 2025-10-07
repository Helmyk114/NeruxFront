import { toastStore } from "@/store";
import { useMutation } from "@/presentacion/components/hook";
import { DeleteProveedorUseCase } from "@/dependencies/inverntario/proveedor";
import { DeleteProveedorCommand } from "@/presentacion/Models/Inventario/ProveedorModels";

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
