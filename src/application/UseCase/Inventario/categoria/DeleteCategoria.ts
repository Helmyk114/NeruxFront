import { CategoryRepository } from "@/domain/repository";
import { DeleteCategoriaCommand } from "@/presentacion/Models";

export function DeleteCategoria(categoryRepository: CategoryRepository) {
  return async (deleteCategoriaCommand: DeleteCategoriaCommand) => {
    const { id } = deleteCategoriaCommand;

    await categoryRepository.delete(id);
  };
}
