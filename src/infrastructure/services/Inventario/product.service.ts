import { ProductoCreate } from "@/domain";
import { apiClient } from "@/infrastructure";


export const productService = {
  createProduct: async (product: ProductoCreate) => {
    try {
      await apiClient.post("/create-product", product);
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error}`);
    }
  },
};
