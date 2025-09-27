
import { Categoria } from "@/domain/interface";
import { usePaginate } from "../../api/usePaginate";
import { GetAllPaginateCategoriaUseCase } from "@/Dependencies/inverntario/categoria";


export function useCategoriaPaginate(
  currentPage: number,
  pageSize: number,
  reload?: boolean
) {
  return usePaginate<Categoria>(GetAllPaginateCategoriaUseCase, {
    currentPage,
    pageSize,
    reload,
    enable: true,
  });
}
