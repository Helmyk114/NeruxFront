
import { Proveedor } from "@/domain/interface";
import { usePaginate } from "../../api/usePaginate";
import { GetAllPaginateProveedorUseCase } from "@/Dependencies/inverntario/proveedor";

export function useProveedorPaginate(
  currentPage: number,
  pagesize: number,
  reload?: boolean
) {
  return usePaginate<Proveedor>(GetAllPaginateProveedorUseCase, {
    currentPage,
    pageSize: pagesize,
    reload,
    enable: true,
  });
}
