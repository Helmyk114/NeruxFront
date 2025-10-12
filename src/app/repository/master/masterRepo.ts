import { ResponseApi } from "@/common/types";
import { Master } from "@/dominio";

export interface MasterRepository {
  getMasterCategoria: () => Promise<ResponseApi<Master[]>>;
  getMasterProveedor: () => Promise<ResponseApi<Master[]>>;
}
