export type CategoriaPaginateUi = {
  id: string;
  name: string;
  description: string;
  isDefault: boolean;
};

export type CategoriaDetailUi = {
  id: string;
  name: string;
  description: string;
  productCount: number;
  createAt: string;
  updateAt: string;
  isDefault: boolean;
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

export type DeleteCategoriaCommand = {
  id: string;
};
