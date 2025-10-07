import { useCreateCategoria } from "./useCategoriaCreate";
import { useDeleteCategoria } from "./useCategoriaDelete";
import { useUpdateCategoria } from "./useCategoriaUpdate";

export function useCategoriaMutations() {
  return {
    create: useCreateCategoria(),
    update: useUpdateCategoria(),
    revome: useDeleteCategoria(),
  };
}
