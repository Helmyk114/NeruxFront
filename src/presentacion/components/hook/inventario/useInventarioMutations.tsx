import { useCategoriaMutations } from "./Categoria/useCategoriaMutations";

export function useInventarioMutations() {
  const categoria = useCategoriaMutations();

  return {
    categoria,
  };
}
