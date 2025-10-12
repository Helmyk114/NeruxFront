import { CategoryRepository } from "@/app/repository";
import { UpdateCategoriaCommand } from "@/presentation/models";

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
