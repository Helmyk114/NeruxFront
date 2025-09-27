export type Producto = {
  id?: string;
  name: string;
  sku: string;
  category: string;
  salePrice?: string;
  alert?: boolean;
  stock?: number;
  minStock?: number;
  unit?: string;
  supplier: string;
  description?: string;
  state?: string;
  create_at?: string;
  update_at?: string;
  image?: string;
  business?: string;
};
