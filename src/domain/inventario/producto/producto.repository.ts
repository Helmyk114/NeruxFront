import { ProductoDto } from "./producto.dto";

export interface ProductoRepository {
  create(producto: Partial<ProductoDto>): Promise<void>;
  detail(endpoint: string, id: string | number): Promise<ProductoDto>;
}
