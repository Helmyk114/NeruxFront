import { ProductoAdapter } from "@/app/mapping";
import { ProductoRepository } from "@/app/repository";
import { ResponseApi, PaginateCommand } from '@/common/types';
import { Producto, ProductoDetail, ProductoPaginate } from "@/dominio";
import { ProductoDetailApi, ProductoPaginateApi } from "@/infraestructura/dto";
import { apiClient } from "@/infraestructura/http";

export const ProductoApiRepository: ProductoRepository = {
  async getById(id: Producto["id"] | null): Promise<ResponseApi<ProductoDetail>> {
    try {
      const res = await apiClient.get<ResponseApi<ProductoDetailApi>>(
        `/product/detail/${id}`
      );
      const domainData = ProductoAdapter.toUiDetail(res.data);
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener el producto por ID: ${error}`);
    }
  },

  async getPaginated(
    paginateCommand: PaginateCommand
  ): Promise<ResponseApi<ProductoPaginate[]>> {
    try {
      const res = await apiClient.get<ResponseApi<ProductoPaginateApi[]>>(
        "/product/table",
        {
          params: {
            page: paginateCommand.currentPage,
            size: paginateCommand.pageSize,
          },
        }
      );

      const domainData = res.data.map((item) =>
        ProductoAdapter.toUiPaginate(item)
      );
      return {
        data: domainData,
        metadata: res.metadata,
      };
    } catch (error) {
      throw new Error(`Error al obtener los productos: ${error}`);
    }
  },

  async create(producto: Partial<Producto>): Promise<void> {
    try {
      //const newProducto = ProductoAdapter.fromDomainProducto(producto);
      await apiClient.post("/create/product", producto);
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error}`);
    }
  },

  async update(producto: Partial<Producto>): Promise<void> {
    try {
      await apiClient.put(`/product/${producto.id}`, producto);
    } catch (error) {
      throw new Error(`Error al actualizar el producto: ${error}`);
    }
  },

  async delete(id: Producto["id"]): Promise<void> {
    try {
      await apiClient.delete(`/product/${Number(id)}`);
    } catch (error) {
      throw new Error(`Error al eliminar el producto: ${error}`);
    }
  },
};
