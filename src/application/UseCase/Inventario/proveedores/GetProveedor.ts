import { Proveedor } from "@/domain/interface";
import { ProveedorRepository } from "@/domain/repository";
import {
  ProveedorDetailUi,
  ProveedorPaginateUi,
} from "@/presentacion/Models/Inventario/ProveedorModels";
import { PaginateCommand, ResponseApi } from "@/shared/types";

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
