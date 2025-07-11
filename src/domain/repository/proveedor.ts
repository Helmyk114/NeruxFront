import { Proveedor, ProveedorForm } from "../entities";

export interface ProveedorRepository {
  getAll: (endpoint: string) => Promise<Proveedor[]>;
  getById: (endpoint: string, id: number | string) => Promise<Proveedor>;
  getPaginated: (
    endpoint: string,
    currentPage: number,
    pageSize: number
  ) => Promise<{
    data: Proveedor[];
    metadata: { totalItems: number; totalPages: number; currentPage: number };
  }>;
  create: (endpoint: string, category: ProveedorForm) => Promise<void>;
  update: (endpoint: string, id: number, category: ProveedorForm) => Promise<Proveedor>;
  delete: (endpoint: string, id: number | string) => Promise<void>;
}
