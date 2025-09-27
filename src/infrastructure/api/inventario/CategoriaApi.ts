import { Categoria } from "@/domain/interface";
import { CategoryRepository } from "@/domain/repository";
import { apiClient } from "@/infrastructure/http/ApiClient";
import { ResponseApi } from "@/shared";
import { CategoriaAdapter } from "@/infrastructure/adapters/inventario/categoria/CategoriaAdapter";
import {
  CategoriaDetail,
  CategoriaPaginate,
} from "@/infrastructure/adapters/inventario/categoria/CategoriaDto";

export const CategoriaApiRepository: CategoryRepository = {
  async getAll(): Promise<Categoria[]> {
    try {
      const response = await apiClient.get<ResponseApi<Categoria[]>>("");
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener las categorias: ${error}`);
    }
  },

  async getById(id: string | null): Promise<ResponseApi<Categoria>> {
    try {
      const res = await apiClient.get<ResponseApi<CategoriaDetail>>(
        `/category/detail/${id}`
      );
      const domainData = CategoriaAdapter.toDomainDetail(res.data);
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener la categoria por ID: ${error}`);
    }
  },

  async getPaginated(
    currentPage: number,
    pageSize: number
  ): Promise<ResponseApi<Categoria[]>> {
    try {
      const res = await apiClient.get<ResponseApi<CategoriaPaginate[]>>(
        "/categories/table",
        {
          params: {
            page: currentPage,
            size: pageSize,
          },
        }
      );

      const domainData = res.data.map((item) =>
        CategoriaAdapter.toDomainPaginate(item)
      );
      return {
        data: domainData,
        metadata: res.metadata,
      };
    } catch (error) {
      throw new Error(`Error al obtener las categorias: ${error}`);
    }
  },

  async create(categoria: Categoria): Promise<void> {
    try {
      await apiClient.post("/create/category", categoria);
    } catch (error) {
      throw new Error(`Error al crear la categoria: ${error}`);
    }
  },

  async update(categoria: Categoria): Promise<void> {
    try {
      await apiClient.put(`/update/category/${categoria.id}`, categoria);
    } catch (error) {
      throw new Error(`Error al actualizar la categoria: ${error}`);
    }
  },

  async delete(id: string): Promise<void> {
    try {
      await apiClient.delete(`/category/${Number(id)}`);
    } catch (error) {
      throw new Error(`Error al eliminar la categoria: ${error}`);
    }
  },
};
