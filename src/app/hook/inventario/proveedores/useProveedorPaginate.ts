import { PaginateCommand } from "@/common/types";
import { GetAllPaginateProveedorUseCase } from "@/dependencies/inventario/proveedores";
import { usePaginate } from "@/presentation/components/hook";
import { ProveedorPaginateUi } from "@/presentation/models";

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