import { CrearProductosValues } from "../../../../presentacion/components/ui/organismo";
import { apiClient } from "../../../http/ApiClient";

export const productService = {
  createProduct: async (product: CrearProductosValues) => {
    try {
      await apiClient.post("/create-product", product);
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error}`);
    }
  },
};
