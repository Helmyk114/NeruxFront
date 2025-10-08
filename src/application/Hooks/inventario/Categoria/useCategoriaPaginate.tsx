import { GetAllPaginateCategoriaUseCase } from "@/dependencies/inventario/categoria";
import { usePaginate } from "@/presentacion/components/hook";
import { CategoriaPaginateUi } from "@/presentacion/models";
import { PaginateCommand } from "@/shared/types";

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
