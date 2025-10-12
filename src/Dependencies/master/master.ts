import { GetMasterCategoria, GetMasterProveedor } from "@/app/useCase";
import { MasterApiRepository } from "@/infraestructura/api";

export const GetAllCategoriasUseCase = GetMasterCategoria(MasterApiRepository);
export const GetAllProveedorUseCase = GetMasterProveedor(MasterApiRepository);
