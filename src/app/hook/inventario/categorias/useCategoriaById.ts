import { GetByIdCategoriaUseCase } from "@/dependencies/inventario/categorias";
import { Categoria } from "@/dominio";
import { useItem } from "@/presentation/components/hook";
import { CategoriaDetailUi } from "@/presentation/models";

export function useCategoriaById(
  id: Categoria["id"] | null,
  enable: boolean,
  reload: boolean
) {
  return useItem<CategoriaDetailUi>(GetByIdCategoriaUseCase, {
    id: id ?? "",
    enable,
    reload,
  });
}