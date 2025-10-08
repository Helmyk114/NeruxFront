import { ResponseApi } from "@/shared/types";
import { MasterRepository } from "@/domain/repository";
import { Master } from "@/domain/interface";

export function GetMasterCategoria(masterRepository: MasterRepository) {
  return async (): Promise<ResponseApi<Master[]>> => {
    return await masterRepository.getMasterCategoria();
  };
}

export function GetMasterProveedor(masterRepository: MasterRepository) {
  return async (): Promise<ResponseApi<Master[]>> => {
    return await masterRepository.getMasterProveedor();
  };
}
