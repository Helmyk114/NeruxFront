import { Producto } from "@/domain/interface";
import { ProductoRepository } from "@/domain/repository";

export type CreateProductoCommand = {
  name: string;
  sku: string;
  category: string;
  salePrice: string;
  alert?: boolean;
  minStock?: number;
  supplier: string;
  description?: string;
};

export function CreateProducto(productoRepository: ProductoRepository) {
  return async (createProductoCommand: CreateProductoCommand) => {
    const {
      name,
      sku,
      category,
      salePrice,
      alert,
      minStock,
      supplier,
      description,
    } = createProductoCommand;

    const producto: Producto = {
      name,
      sku,
      category,
      salePrice,
      alert: alert ?? false,
      minStock,
      supplier,
      description,
    };
    await productoRepository.create(producto);
  };
}
