import { Category, CategoryForm, CategoryRepository } from "@/domain";
import { apiClient } from "@/infrastructure/http/ApiClient";
import { PaginatedResponse } from "@/shared";
import { ResponseApi } from '../../../shared/types/ResponseApi';

export const categoriaService: CategoryRepository = {
  create: async (endpoint: string, categoria: CategoryForm) => {
    try {
      await apiClient.post(endpoint, categoria);
    } catch (error) {
      throw new Error(`Error al crear la categoria: ${error}`);
    }
  },

  getAll: async (endpoint: string): Promise<Category[]> => {
    try {
      const response =await apiClient.get<ResponseApi<Category[]>>(endpoint);
      return response.data

    } catch (error) {
      throw new Error(`Error al obtener las categorias: ${error}`);
    }
  },

  getById: async (endpoint: string, id: number | string): Promise<Category> => {
    try {
      const response = await apiClient.get<ResponseApi<Category>>(`${endpoint}/${id}`);
      return  response.data
    } catch (error) {
      throw new Error(`Error al obtener la categoria por ID: ${error}`);
    }
  },

  getPaginated: async (
    endpoint: string,
    currentPage: number,
    pageSize: number
  ): Promise<PaginatedResponse<Category>> => {
    try {
      return await apiClient.get<PaginatedResponse<Category>>(endpoint, {
        params: {
          page: currentPage,
          size: pageSize,
        },
      });
    } catch (error) {
      throw new Error(`Error al obtener las categorias: ${error}`);
    }
  },

  update: async (
    endpoint: string,
    id: number | string,
    category: CategoryForm
  ): Promise<Category> => {
    try {
      return await apiClient.put<Category>(`${endpoint}/${id}`, category);
    } catch (error) {
      throw new Error(`Error al actualizar la categoria: ${error}`);
    }
  },

  delete: async (endpoint: string, id: number | string): Promise<void> => {
    try {
      await apiClient.delete(`${endpoint}/${id}`);
    } catch (error) {
      throw new Error(`Error al eliminar la categoria: ${error}`);
    }
  },
};
