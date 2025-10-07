import { Categoria } from "@/domain/interface";
import { GetByIdCategoriaUseCase } from "@/dependencies/inverntario/categoria";
import { useItem } from "@/presentacion/components/hook";
import { CategoriaDetailUi } from "@/presentacion/models";

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
