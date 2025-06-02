import { Category, CategoryForm } from "../entities/category";

export interface CategoryRepository {
  getAll: () => Promise<Category[]>;
  getById: (id: number) => Promise<Category>;
  create: (category: CategoryForm) => Promise<Category>;
  update: (id: number, category: CategoryForm) => Promise<Category>;
  delete: (id: number) => Promise<void>; 
}