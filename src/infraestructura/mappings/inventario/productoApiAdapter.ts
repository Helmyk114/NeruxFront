import { Producto } from "@/dominio";
import { CreateProductoCommand } from "@/presentation/models";

export const ProductoApiAdapter = {
  fromDomainProducto(data: CreateProductoCommand): Producto{
      return {
        name: data.name,
        sku: data.sku,
        salePrice: Number(data.salePrice),
        alert: data.alerta,
        minStock: data.alerta ? Number(data.minStock) : 1,
        description: data.description,
        category: Number(data.categoria),
        supplier: Number(data.proveedor),
      };
    },
}