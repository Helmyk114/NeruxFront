import { PaginateCommand } from "@/common/types";
import { GetAllPaginateCategoriaUseCase } from "@/dependencies/inventario/categorias";
import { usePaginate } from "@/presentation/components/hook";
import { CategoriaPaginateUi } from "@/presentation/models";

export function useCategoriaPaginate(
  paginateCommand: PaginateCommand,
  reload?: boolean
) {
  return usePaginate<CategoriaPaginateUi>(GetAllPaginateCategoriaUseCase, {
    ...paginateCommand,
    reload,
    enable: true,
  });
}