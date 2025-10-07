import { Categoria, CategoriaDetail, CategoriaPaginate } from "@/domain/interface";
import { PaginateCommand, ResponseApi } from "@/shared/types";
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
