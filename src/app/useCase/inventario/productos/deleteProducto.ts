import { ProductoRepository } from "@/app/repository";
import { DeleteProductoCommand } from "@/presentation/models";

export function DeleteProducto(productoRepository: ProductoRepository) {
  return async (deleteProductoCommand: DeleteProductoCommand) => {
    const { id } = deleteProductoCommand;

    await productoRepository.delete(id);
  };
}
