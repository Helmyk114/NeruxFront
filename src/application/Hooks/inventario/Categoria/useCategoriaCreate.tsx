import { toastStore } from "@/store";
import { useMutation } from "@/presentacion/components/hook";
import { CreateCategoriaCommand } from "@/presentacion/Models";
import { CreateCategoriaUseCase } from "@/dependencies/inverntario/categoria";

export function useCreateCategoria() {
  const newToast = toastStore((state) => state.newToast);

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
