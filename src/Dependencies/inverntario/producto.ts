import { CreateProducto } from "@/application/UseCase/Inventario/productos/CreateProdcuto";
import {
  GetAllPaginateProducto,
  GetByIdProducto,
} from "@/application/UseCase/Inventario/productos/GetProducto";
import { ProductoApiRepository } from "@/infrastructure/api/inventario/ProductoApi";

export const CreateProductoUseCase = CreateProducto(ProductoApiRepository);
export const GetAllPaginateProductoUseCase = GetAllPaginateProducto(
  ProductoApiRepository
);
export const GetByIdProductoUseCase = GetByIdProducto(ProductoApiRepository);
