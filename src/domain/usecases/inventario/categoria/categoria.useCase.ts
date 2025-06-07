import { categoriaService } from "../../../../infrastructure/services/Inventario/categorias/categoria.service";
import { CategoryForm, Category } from "../../../entities/category";
import { PaginatedResponse } from "../../../../shared/types/ResponsePaginada";

export const categoriasUseCase = {
  create: async (endpoint: string, categoria: CategoryForm) => {
    await categoriaService.create(endpoint, categoria);
  },

  getById: async (endpoint: string, id: number | string): Promise<Category> => {
    const respuesta = await categoriaService.getById(endpoint, id);
    return respuesta;
  },

  getAll: async (endpoint: string): Promise<Category[]> => {
    return await categoriaService.getAll(endpoint);
  },

  getPaginated: async (
    endpoint: string,
    currentPage: number = 1,
    pageSize: number = 5
  ): Promise<PaginatedResponse<Category>> => {
    return await categoriaService.getPaginated(endpoint, currentPage, pageSize);
  },

  update: function (
    endpotin: string,
    id: number,
    category: CategoryForm
  ): Promise<Category> {
    return categoriaService.update(endpotin, id, category);
  },

  delete: function (id: number): Promise<void> {
    console.log("getById called with id:", id);
    throw new Error("Function not implemented.");
  },
};
