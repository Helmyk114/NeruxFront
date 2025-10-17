import { PaginateCommand, ResponseApi } from "@/common/types";
import { BusinessPaginate } from "@/dominio";
import { BusinessCreate, CreateBusinessCommand } from "@/presentation/models";

export interface BusinessRepository {
  getPaginated: (
    paginateCommand: PaginateCommand
  ) => Promise<ResponseApi<BusinessPaginate[]>>;
  create: (business: CreateBusinessCommand) => Promise<BusinessCreate>;
}
