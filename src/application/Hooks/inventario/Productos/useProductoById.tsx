import { Producto } from "@/domain/interface";
import { useItem } from "@/presentacion/components/hook";
import { GetByIdProductoUseCase } from "@/dependencies/inverntario/producto";

export function useProductoById(
  id: string | null,
  enable: boolean,
  reload?: boolean
) {
  return useItem<Producto>(GetByIdProductoUseCase, {
    id: id ?? "",
    enable,
    reload: reload ?? false,
  });
}
