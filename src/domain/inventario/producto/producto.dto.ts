  export interface ProductoDto{
    id: string | number;
    name: string;
    category: number;
    salePrice: number;
    supplierPrice: number;
    stock: number;
    alert: boolean;
    minStock: number;
    unit: number;
    supplier: number;
    description: string;
    create_in: string;
    update_at: string;
  };

export type ProductoCreate = Omit<ProductoDto, "id" | "create_in" | "update_at">;