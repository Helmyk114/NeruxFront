import { Master } from "@/domain/interface";

export interface MasterRepository {
  getMasterCategoria: () => Promise<Master[]>;
  getMasterProveedor: () => Promise<Master[]>;
}
