import { ProductoRepository } from "@/domain/repository";

export type DeleteProductoCommand = {
  id: string;
};

export function DeleteProducto(productoRepository: ProductoRepository) {
  return async (deleteProductoCommand: DeleteProductoCommand) => {
    const { id } = deleteProductoCommand;

    await productoRepository.delete(id);
  };
}
