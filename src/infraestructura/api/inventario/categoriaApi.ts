import { CategoriaAdapter } from "@/app/mapping";
import { CategoryRepository } from "@/app/repository";
import { ResponseApi, PaginateCommand } from "@/common/types";
import { Categoria, CategoriaDetail, CategoriaPaginate } from "@/dominio";
import {
  CategoriaDetailApi,
  CategoriaPaginateApi,
} from "@/infraestructura/dto";
import { apiClient } from "@/infraestructura/http";

export const CategoriaApiRepository: CategoryRepository = {
  async getAll(): Promise<Categoria[]> {
    try {
      const response = await apiClient.get<ResponseApi<Categoria[]>>("");
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener las categorias: ${error}`);
    }
  },

  async getById(
    id: Categoria["id"] | null
  ): Promise<ResponseApi<CategoriaDetail>> {
    try {
      const res = await apiClient.get<ResponseApi<CategoriaDetailApi>>(
        `/category/detail/${id}`
      );
      const domainData = CategoriaAdapter.toUiDetail(res.data);
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener la categoria por ID: ${error}`);
    }
  },

  async getPaginated(
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<CategoriaPaginate[]>> {
    try {
      const res = await apiClient.get<ResponseApi<CategoriaPaginateApi[]>>(
        "/categories/table",
        {
          params: {
            page: paginateCommand.currentPage,
            size: paginateCommand.pageSize,
          },
        }
      );

      const domainData = res.data.map((item) =>
        CategoriaAdapter.toUiPaginate(item)
      );
      return {
        data: domainData,
        metadata: res.metadata,
      };
    } catch (error) {
      throw new Error(`Error al obtener las categorias: ${error}`);
    }
  },

  async create(categoria: Partial<Categoria>): Promise<void> {
    try {
      await apiClient.post("/create/category", categoria);
    } catch (error) {
      throw new Error(`Error al crear la categoria: ${error}`);
    }
  },

  async update(categoria: Partial<Categoria>): Promise<void> {
    try {
      await apiClient.put(`/update/category/${categoria.id}`, categoria);
    } catch (error) {
      throw new Error(`Error al actualizar la categoria: ${error}`);
    }
  },

  async delete(id: Categoria["id"]): Promise<void> {
    try {
      await apiClient.delete(`/category/${Number(id)}`);
    } catch (error) {
      throw new Error(`Error al eliminar la categoria: ${error}`);
    }
  },
};
