import { ProductoDetailApi, ProductoPaginateApi } from "@/infraestructura/dto";
import { ProductoDetailUi, ProductoPaginateUi } from "@/presentation/models";

export const ProductoAdapter = {
  toUiPaginate(api: ProductoPaginateApi): ProductoPaginateUi {
    return {
      id: api.id,
      name: api.name,
      sku: api.sku,
      salePrice: api.salePrice,
      categoria: api.category?.name ?? "-",
      proveedor: api.supplier?.name ?? "-",
      state: api.state.name ?? "-",
      categoriaId: api.category.id,
      proveedorId: api.supplier.id,
      stock: 0,
    };
  },

  toUiDetail(api: ProductoDetailApi): ProductoDetailUi {
    return {
      id: api.id,
      name: api.name,
      sku: api.sku,
      salePrice: api.salePrice ?? "0",
      alerta: api.alert,
      minStock: api.minStock,
      description: api.description,
      createAt: api.create_at,
      updateAt: api.update_at,
      categoria: api.category.name,
      proveedor: api.supplier.name,
      state: api.state.name,
      stock: 0,
      unit: "Unidad",
    };
  },
}