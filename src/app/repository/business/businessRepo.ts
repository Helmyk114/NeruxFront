import { PaginateCommand, ResponseApi } from "@/common/types";
import { BusinessPaginate } from "@/dominio";

export interface BusinessRepository {
  getPaginated: (
    paginateCommand: PaginateCommand
  ) => Promise<ResponseApi<BusinessPaginate[]>>;
  create: (business: Partial<BusinessPaginate>) => Promise<void>;
}
