import { usePaginate } from "@/presentacion/components/hook";
import { GetAllPaginateProveedorUseCase } from "@/dependencies/inventario/proveedor";
import { PaginateCommand } from "@/shared/types";
import { ProveedorPaginateUi } from "@/presentacion/models";

export function useProveedorPaginate(
  paginateCommand: PaginateCommand,
  reload?: boolean
) {
  return usePaginate<ProveedorPaginateUi>(GetAllPaginateProveedorUseCase, {
    ...paginateCommand,
    reload,
    enable: true,
  });
}
