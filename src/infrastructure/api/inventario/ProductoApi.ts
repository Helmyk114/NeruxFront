import { Producto } from "@/domain/interface";
import { ProductoRepository } from "@/domain/repository";
import { ProductoAdapter } from "@/infrastructure/adapters/inventario/producto/ProductoAdapter";
import { ProductoDetail, ProductoPaginate } from "@/infrastructure/adapters/inventario/producto/ProductoDto";
import { apiClient } from "@/infrastructure/http/ApiClient";
import { ResponseApi } from "@/shared";

export const ProductoApiRepository: ProductoRepository = {
  async getById(id: string | null): Promise<ResponseApi<Producto>> {
    try {
      const res = await apiClient.get<ResponseApi<ProductoDetail>>(
        `/product/detail/${id}`
      );
      const domainData = ProductoAdapter.toDomainDetail(res.data);
      return { data: domainData };
    } catch (error) {
      throw new Error(`Error al obtener el producto por ID: ${error}`);
    }
  },

  async getPaginated(
    currentPage: number,
    pageSize: number
  ): Promise<ResponseApi<Producto[]>> {
    try {
      const res = await apiClient.get<ResponseApi<ProductoPaginate[]>>(
        "/product/table",
        {
          params: {
            page: currentPage,
            size: pageSize,
          },
        }
      );

      const domainData = res.data.map((item) =>
        ProductoAdapter.toDomainPaginate(item)
      );
      return {
        data: domainData,
        metadata: res.metadata,
      };
    } catch (error) {
      throw new Error(`Error al obtener los productos: ${error}`);
    }
  },

  async create(producto: Producto): Promise<void> {
    try {
      const newProducto = ProductoAdapter.fromDomainProducto(producto);
      await apiClient.post("/create/product", newProducto);
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error}`);
    }
  },

  async update(producto: Producto): Promise<void> {
    try {
      await apiClient.put(`/product/${producto.id}`, producto);
    } catch (error) {
      throw new Error(`Error al actualizar el producto: ${error}`);
    }
  },

  async delete(id: string): Promise<void> {
    try {
      await apiClient.delete(`/product/${Number(id)}`);
    } catch (error) {
      throw new Error(`Error al eliminar el producto: ${error}`);
    }
  },
};
