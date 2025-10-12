import { PaginateCommand } from "@/common/types";
import { GetAllPaginateProductoUseCase } from "@/dependencies/inventario/productos";
import { usePaginate } from "@/presentation/components/hook";
import { ProductoPaginateUi } from "@/presentation/models";

export function useProductoPaginate(
  paginateCommand: PaginateCommand,
  reload?: boolean
) {
  return usePaginate<ProductoPaginateUi>(GetAllPaginateProductoUseCase, {
    ...paginateCommand,
    reload,
    enable: true,
  });
}