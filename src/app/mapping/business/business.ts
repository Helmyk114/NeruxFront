import { CreateBusinessApi } from "@/infraestructura/dto";
import { BusinessCreate } from "@/presentation/models";

export const BusinessAdapter = {
  toUiCreateBusiness(api: CreateBusinessApi): BusinessCreate {
    return {
      token: api.token,
      idBusiness: api.business_id,
    };
  },
};
