import { productService } from "../../../infrastructure/services/products/product.service";
import { CrearProductosValues } from "../../../presentacion/components/ui/organismo";

export const productUseCase = {
  createProduct: async (product: CrearProductosValues) => {
    await productService.createProduct(product);
  },
};
