import { ProductoDto } from "./producto.dto";

export interface ProductoRepository {
  create(producto: Partial<ProductoDto>): Promise<Partial<ProductoDto>>;
  detail(id: string): Promise<ProductoDto>;
}
