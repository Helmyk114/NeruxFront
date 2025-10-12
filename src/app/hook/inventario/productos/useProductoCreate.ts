import { useToastStore } from "@/common/store";
import { CreateProductoUseCase } from "@/dependencies";
import { useMutation } from "@/presentation/components/hook";
import { CreateProductoCommand } from "@/presentation/models";

export function useProductoCreate() {
  const newToast = useToastStore((state) => state.newToast);

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
