import { toastStore } from "@/store";
import { UpdateCategoriaUseCase } from "@/dependencies/inventario/categoria";
import { useMutation } from "@/presentacion/components/hook";
import { UpdateCategoriaCommand } from "@/presentacion/models";

export function useUpdateCategoria() {
  const newToast = toastStore((state) => state.newToast);

  return useMutation<UpdateCategoriaCommand, void>(UpdateCategoriaUseCase, {
    onSuccess: () => {
      newToast({
        mensaje: "Categoría actualizada exitosamente",
        tipo: "success",
      });
    },

    onError: () => {
      newToast({
        mensaje: "Error al actualizar la categoría",
        tipo: "error",
      });
    },
  });
}
