import { Proveedor, ProveedorForm } from "@/domain";
import { PaginatedResponse } from "@/shared/types/ResponsePaginada";
import { proveedorService } from "@/infrastructure";

export const proveedoresUseCase = {
  create: async (endpoint: string, proveedor: ProveedorForm) => {
    await proveedorService.create(endpoint, proveedor);
  },

  getById: async (
    endpoint: string,
    id: number | string
  ): Promise<Proveedor> => {
    const respuesta = await proveedorService.getById(endpoint, id);
    return respuesta;
  },

  getAll: async (endpoint: string): Promise<Proveedor[]> => {
    return await proveedorService.getAll(endpoint);
  },

  getPaginated: async (
    endpoint: string,
    currentPage = 1,
    pageSize = 5
  ): Promise<PaginatedResponse<Proveedor>> => {
    const proveedor = await proveedorService.getPaginated(
      endpoint,
      currentPage,
      pageSize
    );
    if (proveedor.data.length > 1) {
      return proveedor;
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
    category: ProveedorForm
  ): Promise<Proveedor> => {
    return proveedorService.update(endpotin, id, category);
  },

  delete: async (endpoint: string, id: number | string): Promise<void> => {
    return proveedorService.delete(endpoint, id);
  },
};
