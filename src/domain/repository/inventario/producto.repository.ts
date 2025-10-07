import { Producto } from "@/domain/interface";
import { ResponseApi } from "@/shared/types/ResponseApi";

export interface ProductoRepository {
  getById: (id: string | null) => Promise<ResponseApi<Producto>>;
  getPaginated: (
    currentPage: number,
    pageSize: number
  ) => Promise<ResponseApi<Producto[]>>;
  create: (producto: Producto) => Promise<void>;
  update: (producto: Producto) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
