import { Proveedor, ProveedorForm } from "@/domain/entities";
import { proveedorService } from "@/infrastructure";
import { PaginatedResponse } from "@/shared/types/ResponsePaginada";


export const proveedoresUseCase = {
  create: async (endpoint: string, proveedor: ProveedorForm) => {
    await proveedorService.create(endpoint, proveedor);
  },

  getById: async (endpoint: string, id: number | string): Promise<Proveedor> => {
    const respuesta = await proveedorService.getById(endpoint, id);
    return respuesta;
  },

  getAll: async (endpoint: string): Promise<Proveedor[]> => {
    return await proveedorService.getAll(endpoint);
  },

  getPaginated: async (
    endpoint: string,
    currentPage: number = 1,
    pageSize: number = 5
  ): Promise<PaginatedResponse<Proveedor>> => {
    return await proveedorService.getPaginated(endpoint, currentPage, pageSize);
  },

  update: function (
    endpotin: string,
    id: number,
    category: ProveedorForm
  ): Promise<Proveedor> {
    return proveedorService.update(endpotin, id, category);
  },

  delete: function (endpoint:string, id: number | string): Promise<void> {
    return proveedorService.delete(endpoint, id);
  },
};
