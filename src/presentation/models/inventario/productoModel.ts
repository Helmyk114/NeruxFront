export type ProductoPaginateUi = {
  id: string;
  name: string;
  sku: string;
  categoria: string;
  proveedor: string;
  salePrice: string;
  stock: number;
  state: string;
  categoriaId: number;
  proveedorId: number;
}

export type ProductoDetailUi = {
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
  createAt: string;
  updateAt: string;
}

export type CreateProductoCommand = {
  name: string;
  sku: string;
  categoria: string;
  proveedor: string;
  salePrice: string;
  alerta: boolean;
  minStock: number;
  description: string;
}

export type UpdateProductoCommand = {
  id: string;
  name: string;
  sku: string;
  categoria: string;
  proveedor: string;
  salePrice: string;
  alerta: boolean;
  minStock: number;
  description: string;
}

export type DeleteProductoCommand = {
  id: string
}