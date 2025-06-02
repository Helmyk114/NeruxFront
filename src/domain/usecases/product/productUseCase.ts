import { productService } from "../../../infrastructure/services/products/product.service";
import { CrearProductosValues } from "../../../presentacion/components/ui/organismo/forms/Productos/CrearProductos/createProductConfig";

export const productUseCase = {
  createProduct: async (product: CrearProductosValues) => {
    await productService.createProduct(product);
  },
};
