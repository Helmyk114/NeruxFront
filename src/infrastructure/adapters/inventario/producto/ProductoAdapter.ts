import { Producto } from "@/domain/interface";
import { ProductoDetail, ProductoPaginate } from "./ProductoDto";

export const ProductoAdapter = {
  toDomainPaginate(api: ProductoPaginate): Producto {
    return {
      id: api.id,
      name: api.name,
      sku: api.sku,
      salePrice: api.salePrice,
      category: api.category?.name ?? "-",
      supplier: api.supplier?.name ?? "-",
      state: api.state.name ?? "-",
    };
  },

  toDomainDetail(api: ProductoDetail): Producto {
    return {
      id: api.id,
      name: api.name,
      sku: api.sku,
      salePrice: api.salePrice ?? "0",
      alert: api.alert,
      minStock: api.minStock,
      description: api.description,
      create_at: api.create_at,
      update_at: api.update_at,
      category: api.category.name,
      supplier: api.supplier.name,
      state: api.state.name,
    };
  },
};
