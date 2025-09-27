import { toastStore } from "@/store";
import { useMutation } from "../../api/useMutation";
import { DeleteCategoriaCommand } from "@/application/Inventario/categoria";
import { DeleteCategoriaUseCase } from "@/Dependencies/inverntario/categoria";


export function useDeleteCategoria(onSuccess?: () => void) {
  const newToast = toastStore((state) => state.newToast);
  
  return useMutation<DeleteCategoriaCommand, void>(DeleteCategoriaUseCase, {
    onSuccess: () => {
      newToast({
        mensaje: "Categoría eliminada exitosamente",
        tipo: "success",
      });
      onSuccess?.();
    },
    onError: () => {
      newToast({
        mensaje: "No se pudo eliminar la categoría. Inténtalo más tarde.",
        tipo: "error",
      });
    },
  });
}
