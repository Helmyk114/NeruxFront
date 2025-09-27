export type CategoriaPaginate = {
  id: string;
  name: string;
  description: string;
  is_default: boolean;
};

export type CategoriaDetail = {
  id: string;
  name: string;
  description: string;
  product_count: number;
  created_at: string;
  updated_at: string;
  is_default: boolean;
};
