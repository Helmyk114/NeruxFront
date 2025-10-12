import { Master } from "@/dominio";
import { MasterApi } from "@/infraestructura/dto";

export const MasterAdapter = {
  toUi(api: MasterApi): Master {
    return { key: api.id, label: api.name };
  },
};
