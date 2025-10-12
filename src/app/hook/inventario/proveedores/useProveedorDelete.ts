import { useToastStore } from "@/common/store";
import { DeleteProveedorUseCase } from "@/dependencies";
import { useMutation } from "@/presentation/components/hook";
import { DeleteProveedorCommand } from "@/presentation/models";

export function useDeleteProveedor(onSuccess: () => void) {
  const newToast = useToastStore((state) => state.newToast);

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