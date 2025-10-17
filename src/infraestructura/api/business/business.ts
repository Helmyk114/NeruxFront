import { BusinessAdapter } from "@/app/mapping";
import { BusinessRepository } from "@/app/repository";
import { PaginateCommand, ResponseApi } from "@/common/types";
import { BusinessPaginate } from "@/dominio";
import { CreateBusinessApi } from "@/infraestructura/dto/business/business";
import { apiClient } from "@/infraestructura/http";
import { BusinesApiAdapter } from "@/infraestructura/mappings/business/business";
import { BusinessCreate, CreateBusinessCommand } from "@/presentation/models";

export const BusinessApiRepository: BusinessRepository = {
  async getPaginated(
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<BusinessPaginate[]>> {
    throw new Error(`Function not implemented: ${paginateCommand}`);
  },

  async create(business: CreateBusinessCommand): Promise<BusinessCreate> {
    try {
      const apiData = BusinesApiAdapter.toApiCreateBusiness(business);
      const res = await apiClient.post<CreateBusinessApi>(
        "/create/business",
        apiData
      );
      const domainData = BusinessAdapter.toUiCreateBusiness(res);
      return domainData;
    } catch (error) {
      throw new Error(`Error al crear la empresa: ${error}`);
    }
  },
};
