import { GetAllPaginateProducto, GetByIdProducto } from "@/application/Inventario/productos/GetProducto";
import { ProductoApiRepository } from "@/infrastructure/api/inventario/ProductoApi";


export const GetAllPaginateProductoUseCase = GetAllPaginateProducto(ProductoApiRepository);
export const GetByIdProductoUseCase = GetByIdProducto(ProductoApiRepository);