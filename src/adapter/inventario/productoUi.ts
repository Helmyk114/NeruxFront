export interface ProductoUi {
  id: string | number;
  name: string;
  sku: string;
  category: {
    id: number;
    name: string;
  };
  salePrice: string;
  alert: boolean;
  stock: number;
  minStock: number;
  unit: {
    id: number;
    name: string;
  };
  supplier: {
    id: number;
    name: string;
  };
  description: string;
  state: {
    id: number;
    name: string;
  };
  create_at: string;
  update_at: string;
}
