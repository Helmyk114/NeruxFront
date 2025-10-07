
import { CreateProducto, GetAllPaginateProducto, GetByIdProducto } from "@/application/UseCase";
import { ProductoApiRepository } from "@/infrastructure/api/inventario/ProductoApi";

export const CreateProductoUseCase = CreateProducto(ProductoApiRepository);
export const GetAllPaginateProductoUseCase = GetAllPaginateProducto(
  ProductoApiRepository
);
export const GetByIdProductoUseCase = GetByIdProducto(ProductoApiRepository);
