export interface ProductoDto {
  id: string;
  name: string;
  sku: string;
  salePrice: number;
  alert: boolean;
  minStock: number;
  description: string;
  create_at: string;
  update_at: string;
  category: {
    id: number;
    name: string;
  };
  supplier: {
    id: number;
    name: string;
  };
  unit: number;
  business_id: {
    id: number;
    name: string;
  };
  state: {
    id: number;
    name: string;
  };
}
