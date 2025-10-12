import { ProductoRepository } from "@/app/repository";
import { CreateProductoCommand } from "@/presentation/models";

export function CreateProducto(productoRepository: ProductoRepository) {
  return async (createProductoCommand: CreateProductoCommand) => {
    const {
      name,
      sku,
      categoria,
      salePrice,
      alerta,
      minStock,
      proveedor,
      description,
    } = createProductoCommand;

    const producto = {
      name,
      sku,
      categoria,
      salePrice,
      alerta,
      minStock,
      proveedor,
      description,
    };
    await productoRepository.create(producto);
  };
}
