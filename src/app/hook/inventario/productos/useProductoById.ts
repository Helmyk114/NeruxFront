import { GetByIdProductoUseCase } from "@/dependencies";
import { Producto } from "@/dominio";
import { useItem } from "@/presentation/components/hook";
import { ProductoDetailUi } from "@/presentation/models";

export function useProductoById(
  id: Producto["id"] | null,
  enable: boolean,
  reload?: boolean
) {
  return useItem<ProductoDetailUi>(GetByIdProductoUseCase, {
    id: id ?? "",
    enable,
    reload: reload ?? false,
  });
}