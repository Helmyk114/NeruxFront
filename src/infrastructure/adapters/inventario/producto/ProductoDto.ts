export type ProductoDetail = {
  id: string;
  name: string;
  sku: string;
  salePrice: string;
  alert: boolean;
  minStock: number;
  description: string;
  create_at: string;
  update_at: string;
  category: { id: number; name: string };
  supplier: { id: number; name: string };
  state: { id: number; name: string };
};

export type ProductoPaginate = {
  id: string;
  name: string;
  sku: string;
  salePrice: string;
  category: { id: number; name: string };
  supplier: { id: number; name: string };
  state: { id: number; name: string };
};

export type CreateProductoDto = {
  name: string;
  sku: string;
  salePrice: number;
  alert?: boolean;
  minStock: number;
  description?: string;
  category: number;
  supplier: number;
}