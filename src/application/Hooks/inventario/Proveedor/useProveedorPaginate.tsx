import { Proveedor } from "@/domain/interface";
import { usePaginate } from "@/presentacion/components/hook";
import { GetAllPaginateProveedorUseCase } from "@/dependencies/inverntario/proveedor";
import { PaginateCommand } from "@/shared/types";

export function useProveedorPaginate(
  paginateCommand: PaginateCommand,
  reload?: boolean
) {
  return usePaginate<Proveedor>(GetAllPaginateProveedorUseCase, {
    ...paginateCommand,
    reload,
    enable: true,
  });
}
