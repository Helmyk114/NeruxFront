import { productService } from "@/infrastructure";
import { ProductoDto, ProductoCreate } from "./producto.dto";

export const productUseCase = {
  createProduct: async (product: ProductoCreate) => {
    await productService.createProduct(product);
  },

  getById: async (endpoint: string, id: string | number): Promise<ProductoDto> => {
    const response = await productService.getById(endpoint, id);
    return response;
  },
};
