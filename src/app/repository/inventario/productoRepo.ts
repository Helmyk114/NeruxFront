import { PaginateCommand, ResponseApi } from "@/common/types";
import { Producto, ProductoDetail, ProductoPaginate } from "@/dominio";

export interface ProductoRepository {
  getById: (id: Producto["id"] | null) => Promise<ResponseApi<ProductoDetail>>;
  getPaginated: (
    paginateCommand: PaginateCommand
  ) => Promise<ResponseApi<ProductoPaginate[]>>;
  create: (producto: Partial<Producto>) => Promise<void>;
  update: (producto: Partial<Producto>) => Promise<void>;
  delete: (id: Producto["id"]) => Promise<void>;
}
