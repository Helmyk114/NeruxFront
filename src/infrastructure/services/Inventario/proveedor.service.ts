import { Proveedor, ProveedorForm, ProveedorRepository } from "@/domain";
import { apiClient } from "@/infrastructure/http/ApiClient";
import { ResponseApi } from "@/shared";

import { PaginatedResponse } from "@/shared/types/ResponsePaginada";

export const proveedorService: ProveedorRepository = {
  create: async (endpoint: string, proveedor: ProveedorForm) => {
    try {
      await apiClient.post(endpoint, proveedor);
    } catch (error) {
      throw new Error(`Error al crear el proveedor: ${error}`);
    }
  },

  getAll: async (endpoint: string): Promise<Proveedor[]> => {
    try {
      const response = await apiClient.get<ResponseApi<Proveedor[]>>(endpoint);
      return response.data
    } catch (error) {
      throw new Error(`Error al obtener los proveedores: ${error}`);
    }
  },

  getById: async (
    endpoint: string,
    id: number | string
  ): Promise<Proveedor> => {
    try {
      const response = await apiClient.get<ResponseApi<Proveedor>>(
        `${endpoint}/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener el proveedor por ID: ${error}`);
    }
  },

  getPaginated: async (
    endpoint: string,
    currentPage: number,
    pageSize: number
  ): Promise<PaginatedResponse<Proveedor>> => {
    try {
      return await apiClient.get<PaginatedResponse<Proveedor>>(endpoint, {
        params: {
          page: currentPage,
          size: pageSize,
        },
      });
    } catch (error) {
      throw new Error(`Error al obtener los proveedores paginados: ${error}`);
    }
  },

  update: async (
    endpoint: string,
    id: number,
    proveedor: ProveedorForm
  ): Promise<Proveedor> => {
    try {
      const response = await apiClient.put<Proveedor>(
        `${endpoint}/${id}`,
        proveedor
      );
      return response;
    } catch (error) {
      throw new Error(`Error al actualizar el proveedor: ${error}`);
    }
  },

  delete: async (endpoint: string, id: number | string) => {
    try {
      await apiClient.delete(`${endpoint}/${id}`);
    } catch (error) {
      throw new Error(`Error al eliminar el proveedor: ${error}`);
    }
  },
};
