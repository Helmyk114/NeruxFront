import { CategoryRepository } from "@/domain/repository";

export type UpdateCategoriaCommand = {
  id: string;
  name: string;
  description: string;
};

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