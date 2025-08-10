import { ProductoDto } from "@/domain";
import { formatDate, formatPrice } from "@/shared";
import { ProductoUi } from "./productoUi";

export const adapterProducto = {
  sidemodal: (dataApi: ProductoDto): ProductoUi => ({
    id: dataApi.id,
    name: dataApi.name,
    category: dataApi.category,
    salePrice: formatPrice(dataApi.salePrice),
    supplierPrice: formatPrice(dataApi.supplierPrice),
    stock: dataApi.stock,
    alert: dataApi.alert,
    minStock: dataApi.minStock,
    unit: dataApi.unit,
    supplier: dataApi.supplier,
    description: dataApi.description,
    create_in: formatDate(dataApi.create_in),
    update_at: formatDate(dataApi.update_at),
  }),
};
