import { CreateCategoriaCommand } from "@/presentacion/models";
import { CategoryRepository } from "@/domain/repository";

export function CreateCategoria(categoryRepository: CategoryRepository) {
  return async (createCategoriaCommand: CreateCategoriaCommand) => {
    const { name, description } = createCategoriaCommand;

    const categoria = {
      name,
      description,
    };
    await categoryRepository.create(categoria);
  };
}
