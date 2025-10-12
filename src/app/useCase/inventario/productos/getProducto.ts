import { ProductoRepository } from "@/app/repository";
import { PaginateCommand, ResponseApi } from "@/common/types";
import { Producto } from "@/dominio";
import { ProductoDetailUi, ProductoPaginateUi } from "@/presentation/models";

export function GetAllPaginateProducto(productoRepository: ProductoRepository) {
  return async (
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<ProductoPaginateUi[]>> => {
    const res = await productoRepository.getPaginated(paginateCommand);
    
    return {
      data: res.data,
      metadata: res.metadata,
    };
  };
}

export function GetByIdProducto(productoRepository: ProductoRepository) {
  return async (id: Producto["id"] | null): Promise<ResponseApi<ProductoDetailUi>> => {
    return await productoRepository.getById(id);
  };
}
