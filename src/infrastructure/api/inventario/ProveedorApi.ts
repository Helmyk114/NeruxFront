import { ProveedorRepository } from "@/domain/repository";
import {
  Proveedor,
  ProveedorDetail,
  ProveedorPaginate,
} from "@/domain/interface/inventario/proveedor";
import { ResponseApi } from "@/shared/types/ResponseApi";
import { apiClient } from "@/infrastructure/http/ApiClient";
import { PaginateCommand } from "@/shared/types";
import { ProveedorAdapter } from "@/mapping";
import { ProveedorDetailApi, ProveedorPaginateApi } from "@/infrastructure/dto";

export const ProveedorApiRepository: ProveedorRepository = {
  async getAll(): Promise<Proveedor[]> {
    throw new Error("Function not implemented.");
  },
  async getById(id: string | null): Promise<ResponseApi<ProveedorDetail>> {
    try {
      const res = await apiClient.get<ResponseApi<ProveedorDetailApi>>(
        `/supplier/detail/${id}`
      );
      const domainData = ProveedorAdapter.toUiDetail(res.data);
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener el proveedor por ID: ${error}`);
    }
  },
  async getPaginated(
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<ProveedorPaginate[]>> {
    try {
      const res = await apiClient.get<ResponseApi<ProveedorPaginateApi[]>>(
        "/suppliers/table",
        {
          params: {
            page: paginateCommand.currentPage,
            size: paginateCommand.pageSize,
          },
        }
      );
      const domainData = res.data.map((item) =>
        ProveedorAdapter.toUiPaginate(item)
      );
      return {
        data: domainData,
        metadata: res.metadata,
      };
    } catch (error) {
      throw new Error(`Error al obtener los proveedores: ${error}`);
    }
  },
  async create(proveedor: Partial<Proveedor>): Promise<void> {
    try {
      await apiClient.post("/create/supplier", proveedor);
    } catch (error) {
      throw new Error(`Error al crear el proveedor: ${error}`);
    }
  },
  async update(proveedor: Partial<Proveedor>): Promise<void> {
    try {
      await apiClient.put(`/supplier/${proveedor.id}`, proveedor);
    } catch (error) {
      throw new Error(`Error al actualizar el proveedor: ${error}`);
    }
  },
  async delete(id: Proveedor["id"]): Promise<void> {
    try {
      await apiClient.delete(`/supplier/${Number(id)}`);
    } catch (error) {
      throw new Error(`Error al eliminar el proveedor: ${error}`);
    }
  },
};
