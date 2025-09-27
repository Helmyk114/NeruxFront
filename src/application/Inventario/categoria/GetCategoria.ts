import { Categoria } from "@/domain/interface";
import { CategoryRepository } from "@/domain/repository";
import { PaginateCommand, ResponseApi } from "@/shared";

export function GetAllPaginateCategoria(
  categoryRepository: CategoryRepository
) {
  return async (
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<Categoria[]>> => {
    const { currentPage, pageSize } = paginateCommand;
    const res = await categoryRepository.getPaginated(currentPage, pageSize);

    return {
      data: res.data,
      metadata: res.metadata,
    };
  };
}

export function GetByIdCategoria(categoryRepository: CategoryRepository) {
  return async (id: string | null): Promise<ResponseApi<Categoria>> => {
    return await categoryRepository.getById(id);
  };
}
