import { PaginateCommand, ResponseApi } from "@/common/types";
import { Categoria, CategoriaDetail, CategoriaPaginate } from "@/dominio";

export interface CategoryRepository {
  getAll: () => Promise<Categoria[]>;
  getById: (
    id: Categoria["id"] | null
  ) => Promise<ResponseApi<CategoriaDetail>>;
  getPaginated: (
    paginateCommand: PaginateCommand
  ) => Promise<ResponseApi<CategoriaPaginate[]>>;
  create: (categoria: Partial<Categoria>) => Promise<void>;
  update: (categoria: Partial<Categoria>) => Promise<void>;
  delete: (id: Categoria["id"]) => Promise<void>;
}
