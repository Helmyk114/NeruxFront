import { Producto } from "@/dominio";
import { CreateProductoCommand } from "@/presentation/models";

export const ProductoApiAdapter = {
  fromDomainProducto(data: CreateProductoCommand): Producto {
    return {
      id: "",
      name: data.name,
      sku: data.sku,
      salePrice: data.salePrice,
      alerta: data.alerta,
      minStock: data.alerta ? Number(data.minStock) : 1,
      description: data.description,
      categoria: data.categoria,
      proveedor: data.proveedor,
      state: "",
      stock: 0,
      unit: "",
    };
  },
};
