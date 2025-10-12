import { useToastStore } from "@/common/store";
import { DeleteCategoriaUseCase } from "@/dependencies/inventario/categorias";
import { useMutation } from "@/presentation/components/hook";
import { DeleteCategoriaCommand } from "@/presentation/models";

export function useDeleteCategoria(onSuccess?: () => void) {
  const newToast = useToastStore((state) => state.newToast);

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