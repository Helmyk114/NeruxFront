import { CategoryRepository } from "@/app/repository";
import { DeleteCategoriaCommand } from "@/presentation/models";

export function DeleteCategoria(categoryRepository: CategoryRepository) {
  return async (deleteCategoriaCommand: DeleteCategoriaCommand) => {
    const { id } = deleteCategoriaCommand;

    await categoryRepository.delete(id);
  };
}