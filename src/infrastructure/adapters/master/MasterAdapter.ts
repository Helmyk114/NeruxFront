import { Master } from "@/domain/interface";
import { MasterRes } from "./MasterDto";

export const MasterAdapter = {
  toDomain(api: MasterRes): Master {
    return { id: api.id, name: api.name };
  },
};
