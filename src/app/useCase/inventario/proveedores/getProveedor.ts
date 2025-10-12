import { ProveedorRepository } from "@/app/repository";
import { PaginateCommand, ResponseApi } from "@/common/types";
import { Proveedor } from "@/dominio";
import { ProveedorDetailUi, ProveedorPaginateUi } from "@/presentation/models";

export function GetAllPaginateProveedor(
  proveedorRepository: ProveedorRepository
) {
  return async (
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<ProveedorPaginateUi[]>> => {
    const res = await proveedorRepository.getPaginated(paginateCommand);

    return {
      data: res.data,
      metadata: res.metadata,
    };
  };
}

export function GetByIdProveedor(proveedorRepository: ProveedorRepository) {
  return async (
    id: Proveedor["id"] | null
  ): Promise<ResponseApi<ProveedorDetailUi>> => {
    return await proveedorRepository.getById(id);
  };
}
