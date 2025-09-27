import { Producto } from "@/domain/interface";
import { usePaginate } from "../../api/usePaginate";
import { GetAllPaginateProductoUseCase } from "@/Dependencies/inverntario/producto";

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
