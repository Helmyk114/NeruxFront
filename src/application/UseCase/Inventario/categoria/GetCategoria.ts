import { Categoria } from "@/domain/interface";
import { CategoryRepository } from "@/domain/repository";
import { CategoriaDetailUi, CategoriaPaginateUi } from "@/presentacion/Models";
import { PaginateCommand, ResponseApi } from "@/shared/types";

export function GetAllPaginateCategoria(
  categoryRepository: CategoryRepository
) {
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
