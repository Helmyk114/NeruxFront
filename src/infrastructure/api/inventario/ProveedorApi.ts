
import { ProveedorRepository } from "@/domain/repository";
import { ResponseApi } from "@/shared";
import { Proveedor } from '../../../domain/interface/inventario/proveedor';
import { ProveedorDetail, ProveedorPaginate } from "@/infrastructure/adapters/inventario/proveedor/ProveedorDto";
import { apiClient } from "@/infrastructure/http/ApiClient";
import { ProveedorAdapter } from "@/infrastructure/adapters/inventario/proveedor/ProveedorAdapter";


export const ProveedorApiRepository: ProveedorRepository = {
  async getAll(): Promise<Proveedor[]> {
    throw new Error("Function not implemented.");
  },
  async getById(id: string | null): Promise<ResponseApi<Proveedor>> {
    try {
      const res = await apiClient.get<ResponseApi<ProveedorDetail>>(
        `/supplier/dateil/${id}`
      );
      const domainData = ProveedorAdapter.toDomainDetail(res.data);
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener el proveedor por ID: ${error}`);
    }
  },
  async getPaginated(
    currentPage: number,
    pageSize: number
  ): Promise<ResponseApi<Proveedor[]>> {
    try {
      const res = await apiClient.get<ResponseApi<ProveedorPaginate[]>>(
        "/suppliers/table",
        {
          params: {
            page: currentPage,
            size: pageSize,
          },
        }
      );
      const domainData = res.data.map((item) =>
        ProveedorAdapter.toDomainPaginate(item)
      );
      return {
        data: domainData,
        metadata: res.metadata,
      };
    } catch (error) {
      throw new Error(`Error al obtener los proveedores: ${error}`);
    }
  },
  async create(proveedor: Proveedor): Promise<void> {
    try {
      await apiClient.post("/create/supplier", proveedor);
    } catch (error) {
      throw new Error(`Error al crear el proveedor: ${error}`);
    }
  },
  async update(proveedor: Proveedor): Promise<void> {
    try {
      await apiClient.put(`/supplier/${proveedor.id}`, proveedor);
    } catch (error) {
      throw new Error(`Error al actualizar el proveedor: ${error}`);
    }
  },
  async delete(id: string): Promise<void> {
    try {
      await apiClient.delete(`/supplier/${Number(id)}`);
    } catch (error) {
      throw new Error(`Error al eliminar el proveedor: ${error}`);
    }
  },
};
