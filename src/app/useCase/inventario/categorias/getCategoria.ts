import { CategoryRepository } from "@/app/repository";
import { PaginateCommand, ResponseApi } from "@/common/types";
import { Categoria } from "@/dominio";
import { CategoriaDetailUi, CategoriaPaginateUi } from "@/presentation/models";

export function GetAllPaginateCategoria(categoryRepository: CategoryRepository) {
  return async (
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<CategoriaPaginateUi[]>> => {
    const res = await categoryRepository.getPaginated(paginateCommand);

    return {
      data: res.data,
      metadata: res.metadata,
    };
  };
}

export function GetByIdCategoria(categoryRepository: CategoryRepository) {
  return async (
    id: Categoria["id"] | null
  ): Promise<ResponseApi<CategoriaDetailUi>> => {
    return await categoryRepository.getById(id);
  };
}
