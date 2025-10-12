import { useToastStore } from "@/common/store";
import { CreateCategoriaUseCase } from "@/providers";
import { useMutation } from "@/presentation/components/hook";
import { CreateCategoriaCommand } from "@/presentation/models";

export function useCreateCategoria() {
  const newToast = useToastStore((state) => state.newToast);

  return useMutation<CreateCategoriaCommand, void>(CreateCategoriaUseCase, {
    onSuccess: () => {
      newToast({
        mensaje: "Categoría creada exitosamente",
        tipo: "success",
      });
    },

    onError: () => {
      newToast({
        mensaje: "Error al crear la categoría",
        tipo: "error",
      });
    },
  });
}