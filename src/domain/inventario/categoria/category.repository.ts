import { Category, CategoryForm } from "@/domain";

export interface CategoryRepository {
  getAll: (endpoint: string) => Promise<Category[]>;
  getById: (endpoint: string, id: number | string) => Promise<Category>;
  getPaginated: (
    endpoint: string,
    currentPage: number,
    pageSize: number
  ) => Promise<{
    data: Category[];
    metadata: { totalItems: number; totalPages: number; currentPage: number };
  }>;
  create: (endpoint: string, category: CategoryForm) => Promise<void>;
  update: (
    endpoint: string,
    id: number | string,
    category: CategoryForm
  ) => Promise<Category>;
  delete: (endpoint: string, id: number | string) => Promise<void>;
}
