  export type Producto = {
    id: string
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
    update_in: string;
  };

export type ProductoCreate = Omit<Producto, "id" | "create_in" | "update_in">;