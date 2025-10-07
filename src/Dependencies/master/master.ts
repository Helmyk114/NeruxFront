import {
  GetMasterCategoria,
  GetMasterProveedor,
} from "@/application/UseCase/master/GetMasterProducto";
import { MasterApiRepository } from "@/infrastructure/api/master/MasterApi";

export const GetAllCategoriasUseCase = GetMasterCategoria(MasterApiRepository);
export const GetAllProveedorUseCase = GetMasterProveedor(MasterApiRepository);
