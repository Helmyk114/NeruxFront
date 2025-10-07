import { CategoryRepository } from "@/domain/repository";
import { UpdateCategoriaCommand } from "@/presentacion/Models";

export function UpdateCategoria(categoryRepository: CategoryRepository) {
  return async (updateCategoriaCommand: UpdateCategoriaCommand) => {
    const { id, name, description } = updateCategoriaCommand;

    const categoria = {
      id,
      name,
      description,
    };
    await categoryRepository.update(categoria);
  };
}
