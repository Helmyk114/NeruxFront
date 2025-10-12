import {
  CreateProducto,
  GetAllPaginateProducto,
  GetByIdProducto,
} from "@/app/useCase";
import { ProductoApiRepository } from "@/infraestructura/api";

export const CreateProductoUseCase = CreateProducto(ProductoApiRepository);
export const GetAllPaginateProductoUseCase = GetAllPaginateProducto(
  ProductoApiRepository
);
export const GetByIdProductoUseCase = GetByIdProducto(ProductoApiRepository);
