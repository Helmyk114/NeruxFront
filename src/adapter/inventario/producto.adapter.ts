import { ProductoDto } from "@/domain";
import { formatDate, formatPrice } from "@/shared";
import { ProductoUi } from "./productoUi";

export const adapterProducto = {
  sidemodal: (dataApi: ProductoDto): ProductoUi => ({
    id: dataApi.id,
    name: dataApi.name,
    sku: dataApi.sku,
    stock: dataApi.stock,
    state: { id: dataApi.state.id, name: dataApi.state.name },
    category: { id: dataApi.category.id, name: dataApi.category.name },
    salePrice: formatPrice(dataApi.salePrice),
    alert: dataApi.alert,
    minStock: dataApi.minStock,
    unit: { id: dataApi.unit, name: '' },
    supplier: { id: dataApi.supplier.id, name: dataApi.supplier.name },
    description: dataApi.description,
    create_at: formatDate(dataApi.create_at),
    update_at: formatDate(dataApi.update_at),
  }),
};
