import { MasterRepository } from "@/app/repository";
import { ResponseApi } from "@/common/types";
import { Master } from "@/dominio";
import { apiClient } from "@/infraestructura/http";
import { MasterAdapter } from "@/app/mapping";
import { MasterApi } from "@/infraestructura/dto";

export const MasterApiRepository: MasterRepository = {
  async getMasterCategoria(): Promise<ResponseApi<Master[]>> {
    try {
      const res = await apiClient.get<ResponseApi<MasterApi[]>>(
        "/categories/select"
      );
      const domainData = res.data.map((item: MasterApi) =>
        MasterAdapter.toUi(item)
      );
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener el maestro de categorias: ${error}`);
    }
  },

  async getMasterProveedor(): Promise<ResponseApi<Master[]>> {
    try {
      const res = await apiClient.get<ResponseApi<MasterApi[]>>(
        "/supplier/select"
      );
      const domainData = res.data.map((item: MasterApi) =>
        MasterAdapter.toUi(item)
      );
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener el maestro de proveedores: ${error}`);
    }
  },
};
