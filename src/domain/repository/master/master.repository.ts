import { Master } from "@/domain/interface";
import { ResponseApi } from '../../../shared/types/ResponseApi';

export interface MasterRepository {
  getMasterCategoria: () => Promise<ResponseApi<Master[]>>;
  getMasterProveedor: () => Promise<ResponseApi<Master[]>>;
}
