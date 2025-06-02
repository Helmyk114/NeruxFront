import { Category, CategoryForm } from "../../../../domain/entities/category";
import { CategoryRepository } from "../../../../domain/repository/category";
import { CategoriaValues } from "../../../../presentacion/components/ui/organismo/forms/Categorias/categoriasConfig";
import { apiClient } from "../../../http/ApiClient";

export const categoriatService: CategoryRepository = {
  create: async (categoria: CategoriaValues) => {
    try {
      await apiClient.post("/create-category", categoria);
    } catch (error) {
      throw new Error(`Error al crear la categoria: ${error}`);
    }
  },
  getAll: function (): Promise<Category[]> {
    throw new Error("Function not implemented.");
  },
  getById: function (id: number): Promise<Category> {
    console.log("getById called with id:", id);
    throw new Error("Function not implemented.");
  },
  update: function (id: number, category: CategoryForm): Promise<Category> {
    console.log("getById called with id:", id, category);
    throw new Error("Function not implemented.");
  },
  delete: function (id: number): Promise<void> {
    console.log("getById called with id:", id);
    throw new Error("Function not implemented.");
  }
};
