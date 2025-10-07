import { toastStore } from "@/store";
import { useMutation } from "@/presentacion/components/hook";
import { CreateProductoCommand } from "@/application/UseCase/Inventario/productos/CreateProdcuto";
import { CreateProductoUseCase } from "@/dependencies/inverntario/producto";

export function useProductoCreate() {
  const newToast = toastStore((state) => state.newToast);

  return useMutation<CreateProductoCommand, void>(CreateProductoUseCase, {
    onSuccess: () => {
      newToast({
        mensaje: "Producto creado exitosamente",
        tipo: "success",
      });
    },

    onError: () => {
      newToast({
        mensaje: "Error al crear el producto",
        tipo: "error",
      });
    },
  });
}
