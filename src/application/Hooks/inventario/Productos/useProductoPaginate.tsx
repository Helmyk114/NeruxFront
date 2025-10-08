import { Producto } from "@/domain/interface";
import { usePaginate } from "@/presentacion/components/hook";
import { GetAllPaginateProductoUseCase } from "@/dependencies/inventario/producto";

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
