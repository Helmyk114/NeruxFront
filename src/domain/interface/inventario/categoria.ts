export type Categoria = {
  id?: string;
  name: string;
  description: string;
  productCount?: number;
  createAt?: string;
  updateAt?: string;
  isDefault?: boolean;
};

export type CreateCategoriaCommand = {
  name: string;
  description: string;
};

export type UpdateCategoriaCommand = {
  id: string;
  name: string;
  description: string;
};
