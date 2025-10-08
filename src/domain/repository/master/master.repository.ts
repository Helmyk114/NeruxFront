import { Master } from "@/domain/interface";
import { ResponseApi } from "@/shared/types";
export interface MasterRepository {
  getMasterCategoria: () => Promise<ResponseApi<Master[]>>;
  getMasterProveedor: () => Promise<ResponseApi<Master[]>>;
}
