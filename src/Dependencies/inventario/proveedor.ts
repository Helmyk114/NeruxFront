import {
  CreateProveedor,
  DeleteProveedor,
  GetAllPaginateProveedor,
  GetByIdProveedor,
  UpdateProveedor,
} from "@/application/UseCase";
import { ProveedorApiRepository } from "@/infrastructure/api/inventario/ProveedorApi";

export const CreateProveedorUseCase = CreateProveedor(ProveedorApiRepository);
export const UpdateProveedorUseCase = UpdateProveedor(ProveedorApiRepository);
export const DeleteProveedorUseCase = DeleteProveedor(ProveedorApiRepository);
//export const GetAllProveedrorUseCase = (ProveedorApiRepository);
export const GetAllPaginateProveedorUseCase = GetAllPaginateProveedor(
  ProveedorApiRepository
);
export const GetByIdProveedorUseCase = GetByIdProveedor(ProveedorApiRepository);
