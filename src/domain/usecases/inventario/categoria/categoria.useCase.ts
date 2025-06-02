import { categoriatService } from "../../../../infrastructure/services/Inventario/categorias/categoria.service";
import { CategoriaValues } from "../../../../presentacion/components/ui/organismo/forms/Categorias/categoriasConfig";

export const categoriasUseCase = {
  create: async (categoria: CategoriaValues) => {
    await categoriatService.create(categoria);
  },
};
