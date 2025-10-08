import { CategoryRepository } from "@/domain/repository";
import { CreateCategoriaCommand } from "@/presentacion/models";

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
