import { CategoryRepository } from "@/domain/repository";

export type DeleteCategoriaCommand = {
  id: string;
};

export function DeleteCategoria(categoryRepository: CategoryRepository) {
  return async (deleteCategoriaCommand: DeleteCategoriaCommand) => {
    const { id } = deleteCategoriaCommand;

    await categoryRepository.delete(id);
  };
}
