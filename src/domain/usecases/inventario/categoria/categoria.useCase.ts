import { Category, CategoryForm } from "@/domain/entities";
import { PaginatedResponse } from "@/shared/types/ResponsePaginada";
import { categoriaService } from "@/infrastructure";

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
    const categoria = await categoriaService.getPaginated(
      endpoint,
      currentPage,
      pageSize
    );
    if (categoria.data.length > 1) {
      return categoria;
    }
    return {
      data: [],
      metadata: {
        currentPage,
        totalPages: 0,
        totalItems: 0,
      },
    };
  },

  update: function (
    endpotin: string,
    id: number,
    category: CategoryForm
  ): Promise<Category> {
    return categoriaService.update(endpotin, id, category);
  },

  delete: function (endpoint: string, id: number | string): Promise<void> {
    return categoriaService.delete(endpoint, id);
  },
};
