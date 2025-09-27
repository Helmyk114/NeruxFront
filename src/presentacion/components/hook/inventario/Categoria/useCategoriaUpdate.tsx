import { toastStore } from "@/store";
import { useMutation } from "../../api/useMutation";
import { UpdateCategoriaCommand } from "@/application/Inventario/categoria";
import { UpdateCategoriaUseCase } from "@/Dependencies/inverntario/categoria";


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
