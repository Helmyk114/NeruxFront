import { CreateBusinessReq } from "@/infraestructura/dto";
import { CreateBusinessCommand } from "@/presentation/models";

export const BusinesApiAdapter = {
  toApiCreateBusiness(ui: CreateBusinessCommand): CreateBusinessReq {
    return {
      name: ui.name,
      nit: ui.nit,
      phone: ui.phone,
      email: ui.email,
      address: ui.address,
    };
  
  }
}