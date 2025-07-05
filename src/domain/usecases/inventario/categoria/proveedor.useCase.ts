import { Proveedor, ProveedorForm } from "@/domain/entities";
import { PaginatedResponse } from "@/shared/types/ResponsePaginada";


export const proveedoresUseCase = {
  create: async (endpoint: string, categoria: ProveedorForm) => {
    await categoriaService.create(endpoint, categoria);
  },

  getById: async (endpoint: string, id: number | string): Promise<Proveedor> => {
    const respuesta = await categoriaService.getById(endpoint, id);
    return respuesta;
  },

  getAll: async (endpoint: string): Promise<Proveedor[]> => {
    return await categoriaService.getAll(endpoint);
  },

  getPaginated: async (
    endpoint: string,
    currentPage: number = 1,
    pageSize: number = 5
  ): Promise<PaginatedResponse<Proveedor>> => {
    return await categoriaService.getPaginated(endpoint, currentPage, pageSize);
  },

  update: function (
    endpotin: string,
    id: number,
    category: ProveedorForm
  ): Promise<Proveedor> {
    return categoriaService.update(endpotin, id, category);
  },

  delete: function (id: number): Promise<void> {
    console.log("getById called with id:", id);
    throw new Error("Function not implemented.");
  },
};
