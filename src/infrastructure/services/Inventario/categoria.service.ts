import { Category, CategoryForm } from "../../../domain/entities/category";
import { CategoryRepository } from "../../../domain/repository/category";
import { ResponseApi } from "../../../shared/types/ResponseApi";
import { PaginatedResponse } from "../../../shared/types/ResponsePaginada";
import { Axios } from "../../http/Axios";

export const categoriaService: CategoryRepository = {
  create: async (endpoint: string, categoria: CategoryForm) => {
    try {
      await Axios.post(endpoint, categoria);
    } catch (error) {
      throw new Error(`Error al crear la categoria: ${error}`);
    }
  },

  getAll: async (endpoint: string): Promise<Category[]> => {
    try {
      return await Axios.get<Category[]>(endpoint);
    } catch (error) {
      throw new Error(`Error al obtener las categorias: ${error}`);
    }
  },

  getById: async (endpoint: string, id: number | string): Promise<Category> => {
    try {
      const respuesta = await Axios.get<ResponseApi<Category>>(
        `${endpoint}/${id}`
      );
      return respuesta.data;
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
      return await Axios.get<PaginatedResponse<Category>>(endpoint, {
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
      const respuesta = await Axios.put<Category>(
        `${endpoint}/${id}`,
        category
      );
      return respuesta;
    } catch (error) {
      throw new Error(`Error al actualizar la categoria: ${error}`);
    }
  },

  delete: async (endpoint: string, id: number | string): Promise<void> => {
    try {
      await Axios.delete(`${endpoint}/${id}`);
    } catch (error) {
      throw new Error(`Error al eliminar la categoria: ${error}`);
    }
  },
};
