import { Master } from "@/domain/interface";
import { MasterRepository } from "@/domain/repository/master/master.repository";
import { MasterAdapter } from "@/infrastructure/adapters/master/MasterAdapter";
import { MasterRes } from "@/infrastructure/adapters/master/MasterDto";
import { apiClient } from "@/infrastructure/http/ApiClient";
import { ResponseApi } from "@/shared";

export const MasterApiRepository: MasterRepository = {
  async getMasterCategoria(): Promise<ResponseApi<Master[]>> {
    try {
      const res = await apiClient.get<ResponseApi<MasterRes[]>>(
        "/categories/select"
      );
      const domainData = res.data.map((item: MasterRes) =>
        MasterAdapter.toDomain(item)
      );
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener el maestro de categorias: ${error}`);
    }
  },

  async getMasterProveedor(): Promise<ResponseApi<Master[]>> {
    try {
      const res = await apiClient.get<ResponseApi<MasterRes[]>>(
        "/supplier/select"
      );
      const domainData = res.data.map((item: MasterRes) =>
        MasterAdapter.toDomain(item)
      );
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener el maestro de proveedores: ${error}`);
    }
  },
};
