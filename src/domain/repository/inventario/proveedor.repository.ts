import { Proveedor } from "@/domain/interface";
import { ResponseApi } from "@/shared";

export interface ProveedorRepository {
  getAll: () => Promise<Proveedor[]>;
  getById: (id: string | null) => Promise<ResponseApi<Proveedor>>;
  getPaginated: (currentPage: number, pageSize: number) => Promise<ResponseApi<Proveedor[]>>;
  create: (categoria: Proveedor) => Promise<void>;
  update: (categoria: Proveedor) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
