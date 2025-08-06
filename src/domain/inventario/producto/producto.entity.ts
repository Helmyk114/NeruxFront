  export interface Producto{
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

export type ProductoCreate = Omit<Producto, "id" | "create_in" | "update_in">;