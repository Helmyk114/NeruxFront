import { ProductoDto} from "@/domain";
import { apiClient } from "@/infrastructure";
import { ResponseApi } from "@/shared";

export const productService = {
  createProduct: async (product: ProductoDto) => {
    try {
      await apiClient.post("/create/product", product);
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error}`);
    }
  },

  getById: async (
    endpoint: string,
    id: string | number
  ): Promise<ProductoDto> => {
    try {
      const response = await apiClient.get<ResponseApi<ProductoDto>>(
        `${endpoint}/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error al obtener el producto con ID ${id}: ${error}`);
    }
  },
};
