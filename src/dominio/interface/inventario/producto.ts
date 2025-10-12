export type Producto = {
  id: string;
  name: string;
  sku: string;
  categoria: string;
  proveedor: string;
  salePrice: string;
  stock: number;
  state: string;
  alerta: boolean;
  minStock: number;
  unit: string;
  description: string;
};

export type ProductoPaginate = Omit<Producto, "alerta" | "minStock" | "description" | "unit"> & {
  categoriaId: number;
  proveedorId: number;
};

export type ProductoDetail = Producto & {
  createAt: string;
  updateAt: string;
}