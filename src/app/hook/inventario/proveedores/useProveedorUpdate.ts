import { useToastStore } from "@/common/store";
import { UpdateProveedorUseCase } from "@/dependencies/inventario/proveedores";
import { useMutation } from "@/presentation/components/hook";
import { UpdateProveedorCommand } from "@/presentation/models";

export function useUpdateProveedor() {
  const newToast = useToastStore((state) => state.newToast);

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