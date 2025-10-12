import { MasterRepository } from "@/app/repository";
import { ResponseApi } from "@/common/types";
import { Master } from "@/dominio";

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
