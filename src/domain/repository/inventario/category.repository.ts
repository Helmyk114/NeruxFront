import { Categoria } from "@/domain/interface";
import { ResponseApi } from "@/shared";

export interface CategoryRepository {
  getAll: () => Promise<Categoria[]>;
  getById: (id: string | null) => Promise<ResponseApi<Categoria>>;
  getPaginated: (currentPage: number, pageSize: number) => Promise<ResponseApi<Categoria[]>>;
  create: (categoria: Categoria) => Promise<void>;
  update: (categoria: Categoria) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
