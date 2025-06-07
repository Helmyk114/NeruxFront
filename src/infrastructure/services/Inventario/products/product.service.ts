import { CrearProductosValues } from "../../../../presentacion/components/ui/organismo";
import { Axios } from "../../../http/Axios";

export const productService = {
  createProduct: async (product: CrearProductosValues) => {
    try {
      await Axios.post("/create-product", product);
    } catch (error) {
      throw new Error(`Error al crear el producto: ${error}`);
    }
  },
};
