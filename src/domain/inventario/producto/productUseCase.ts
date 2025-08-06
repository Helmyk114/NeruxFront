import { productService } from "@/infrastructure";
import { Producto, ProductoCreate } from "./producto.entity";

export const productUseCase = {
  createProduct: async (product: ProductoCreate) => {
    await productService.createProduct(product);
  },

  getById: async (endpoint: string, id: string | number): Promise<Producto> => {
    const response = await productService.getById(endpoint, id);
    return response;
  }
};
