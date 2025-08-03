import { productService } from "../../../infrastructure/services/Inventario/products/product.service";
import { ProductoCreate } from "./producto.entity";

export const productUseCase = {
  createProduct: async (product: ProductoCreate) => {
    await productService.createProduct(product);
  },
};
