import { toastStore } from "@/store";
import { useMutation } from "../../api/useMutation";
import { CreateProveedorCommand } from "@/application/Inventario/proveedores";
import { CreateProveedorUseCase } from "@/Dependencies/inverntario/proveedor";

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
