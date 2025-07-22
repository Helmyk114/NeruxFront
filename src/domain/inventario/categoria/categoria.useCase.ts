import { PaginatedResponse } from "@/shared/types/ResponsePaginada";
import { categoriaService } from "@/infrastructure";
import { Category, CategoryForm } from "@/domain";

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
    currentPage = 1,
    pageSize = 5
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

  update: async (
    endpotin: string,
    id: number,
    category: CategoryForm
  ): Promise<Category> => {
    return categoriaService.update(endpotin, id, category);
  },

  delete: async (endpoint: string, id: number | string): Promise<void> => {
    return categoriaService.delete(endpoint, id);
  },
};
