import { productService } from "@/infrastructure";
import { ProductoCreate, ProductoDto } from "./producto.dto";
import { ProductoRepository } from "./producto.repository";

export const productUseCase: ProductoRepository = {
  create: async (product: Partial<ProductoCreate>) => {
    const response = await productService.createProduct(product);
    return response;
  },

  detail: async (endpoint: string, id: string | number): Promise<ProductoDto> => {
    const response = await productService.getById(endpoint, id);
    return response;
  },
};
