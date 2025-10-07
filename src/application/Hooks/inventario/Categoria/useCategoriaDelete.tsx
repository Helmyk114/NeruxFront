import { toastStore } from "@/store";
import { useMutation } from "@/presentacion/components/hook";
import { DeleteCategoriaCommand } from "@/presentacion/Models";
import { DeleteCategoriaUseCase } from "@/dependencies/inverntario/categoria";

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
