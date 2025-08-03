import { Unit } from "@/domain/master/master.entity";
import { apiClient } from "../http/ApiClient";
import { ResponseApi } from "@/shared";

export const masterService = {
  getAllUnits: async (endPoint: string): Promise<Unit[]> => {
    try {
      const responde = await apiClient.get<ResponseApi<Unit[]>>(endPoint);
      return responde.data
    } catch (error) {
      throw new Error(`Error al obtener las unidades: ${error}`);
    }
  }
}