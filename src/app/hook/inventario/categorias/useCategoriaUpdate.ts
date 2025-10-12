import { useToastStore } from "@/common/store";
import { UpdateCategoriaUseCase } from "@/dependencies";
import { useMutation } from "@/presentation/components/hook";
import { UpdateCategoriaCommand } from "@/presentation/models";

export function useUpdateCategoria() {
  const newToast = useToastStore((state) => state.newToast);

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