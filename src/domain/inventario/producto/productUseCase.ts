import { productService } from "@/infrastructure";
import { ProductoCreate } from "./producto.entity";

export const productUseCase = {
  createProduct: async (product: ProductoCreate) => {
    await productService.createProduct(product);
  },
};
