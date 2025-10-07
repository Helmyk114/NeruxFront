import { Producto } from "@/Domain/interface";
import { usePaginate } from "@/presentacion/components/hook";
import { GetAllPaginateProductoUseCase } from "@/dependencies/inverntario/producto";

export function useProductoPaginate(
  currentPage: number,
  pagesize: number,
  reload?: boolean
) {
  return usePaginate<Producto>(GetAllPaginateProductoUseCase, {
    currentPage,
    pageSize: pagesize,
    reload,
    enable: true,
  });
}
