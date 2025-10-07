import { Master } from "@/Domain/interface";
import { MasterRes } from "../../infrastructure/dto/master/MasterDto";

export const MasterAdapter = {
  toDomain(api: MasterRes): Master {
    return { key: api.id, label: api.name };
  },
};
