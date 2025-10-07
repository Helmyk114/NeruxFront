import { GetAllPaginateCategoriaUseCase } from "@/dependencies/inverntario/categoria";
import { usePaginate } from "@/presentacion/components/hook";
import { CategoriaPaginateUi } from "@/presentacion/Models";
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
