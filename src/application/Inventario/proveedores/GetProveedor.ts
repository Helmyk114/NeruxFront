import { Proveedor } from "@/domain/interface";
import { ProveedorRepository } from "@/domain/repository";
import { PaginateCommand, ResponseApi } from "@/shared";

export function GetAllPaginateProveedor(
  proveedorRepository: ProveedorRepository
) {
  return async (
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<Proveedor[]>> => {
    const { currentPage, pageSize } = paginateCommand;
    const res = await proveedorRepository.getPaginated(currentPage, pageSize);

    return {
      data: res.data,
      metadata: res.metadata,
    };
  };
}

export function GetByIdProveedor(proveedorRepository: ProveedorRepository) {
  return async (id: string | null): Promise<ResponseApi<Proveedor>> => {
    return await proveedorRepository.getById(id);
  };
}
