import { PaginateCommand, ResponseApi } from "@/common/types";
import { Proveedor, ProveedorDetail, ProveedorPaginate } from "@/dominio";

export interface ProveedorRepository {
  getAll: () => Promise<Proveedor[]>;
  getById: (
    id: Proveedor["id"] | null
  ) => Promise<ResponseApi<ProveedorDetail>>;
  getPaginated: (
    paginateCommand: PaginateCommand
  ) => Promise<ResponseApi<ProveedorPaginate[]>>;
  create: (proveedor: Partial<Proveedor>) => Promise<void>;
  update: (proveedor: Partial<Proveedor>) => Promise<void>;
  delete: (id: Proveedor["id"]) => Promise<void>;
}
