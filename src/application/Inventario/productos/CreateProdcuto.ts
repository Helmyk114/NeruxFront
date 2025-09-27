import { Producto } from "@/domain/interface";
import { ProductoRepository } from "@/domain/repository";

export type CreateProductoCommand = {
  name: string;
  sku: string;
  category: string;
  salePrice: string;
  alert: boolean;
  minStock: number;
  unit: string;
  supplier: string;
  description: string;
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
      unit,
      supplier,
      description,
    } = createProductoCommand;

    const producto: Producto = {
      name,
      sku,
      category,
      salePrice,
      alert,
      minStock,
      unit,
      supplier,
      description,
    };
    await productoRepository.create(producto);
  };
}
