import { ProductoCreate, ProductoDto } from "./producto.dto";

export interface ProductoRepository {
  create(producto: Partial<ProductoCreate>): Promise<void>;
  detail(endpoint: string, id: string | number): Promise<ProductoDto>;
}
