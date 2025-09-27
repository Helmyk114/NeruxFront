import { Categoria } from "@/domain/interface";
import { CategoryRepository } from "@/domain/repository";

export type CreateCategoriaCommand = {
  name: string;
  description: string;
};

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
