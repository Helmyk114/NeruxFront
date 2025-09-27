
import { Categoria } from "@/domain/interface";
import { useItem } from "../../api/useItem";
import { GetByIdCategoriaUseCase } from "@/Dependencies/inverntario/categoria";


export function useCategoriaById(
  id: string | null,
  enable: boolean,
  reload: boolean
) {
  return useItem<Categoria>(GetByIdCategoriaUseCase, {
    id: id ?? "",
    enable,
    reload,
  });
}
