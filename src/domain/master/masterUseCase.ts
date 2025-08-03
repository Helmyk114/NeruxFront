import { masterService } from "@/infrastructure";
import { Unit } from "./master.entity";

export const masterUseCase = {
  getAllUnits: async (endPoint: string): Promise<Unit[]> => {
    return await masterService.getAllUnits(endPoint);
  },
};
