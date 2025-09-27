import { toastStore } from "@/store";
import { useMutation } from "../../api/useMutation";
import { CreateCategoriaCommand } from "@/application/Inventario/categoria";
import { CreateCategoriaUseCase } from "@/Dependencies/inverntario/categoria";


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
