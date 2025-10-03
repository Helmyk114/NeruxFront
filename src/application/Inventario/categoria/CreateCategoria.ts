import { Categoria, CreateCategoriaCommand } from "@/domain/interface";
import { CategoryRepository } from "@/domain/repository";

export function CreateCategoria(categoryRepository: CategoryRepository) {
  return async (createCategoriaCommand: CreateCategoriaCommand) => {
    const { name, description } = createCategoriaCommand;

    const categoria: Categoria = {
      name,
      description,
    };
    await categoryRepository.create(categoria);
  };
}
