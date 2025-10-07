export type Categoria = {
  id: string;
  name: string;
  description: string;
  productCount: number;
};

export type CategoriaPaginate = Omit<Categoria, "productCount"> & {
  isDefault: boolean;
};

export type CategoriaDetail = Categoria & {
  createAt: string;
  updateAt: string;
  isDefault: boolean;
};
