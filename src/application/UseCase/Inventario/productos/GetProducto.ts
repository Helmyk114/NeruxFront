import { Producto } from "@/Domain/interface";
import { ProductoRepository } from "@/domain/repository";
import { PaginateCommand, ResponseApi } from "@/shared";

export function GetAllPaginateProducto(productoRepository: ProductoRepository) {
  return async (
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<Producto[]>> => {
    const { currentPage, pageSize } = paginateCommand;
    const res = await productoRepository.getPaginated(currentPage, pageSize);
    return {
      data: res.data,
      metadata: res.metadata,
    };
  };
}

export function GetByIdProducto(productoRepository: ProductoRepository) {
  return async (id: string | null): Promise<ResponseApi<Producto>> => {
    return await productoRepository.getById(id);
  };
}
