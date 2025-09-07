import { statusProductMap } from "../../../../shared/constants/colors/statusProductMap";
import {
  ActionsCell,
  ChipCell,
  ImgCellSimple,
  SimpleCell,
} from "../../../components/ui/atomos";
import { ColumnRender } from "../../../../shared/types/columRenderType";
import { ProductoUi } from "@/adapter/inventario/productoUi";
import { formatPrice } from "@/shared";

export const ProductColumnRender = (
  onEdit: (product: ProductoUi) => void,
  onView: (product: ProductoUi) => void,
  onDelete: (product: ProductoUi) => void
): ColumnRender<ProductoUi> => ({
  name: (product: ProductoUi) => <ImgCellSimple textTop={product.name} />,
  sku: (product: ProductoUi) => <SimpleCell textTop={product.sku || "-"} />,

  category: (product: ProductoUi) => (
    <SimpleCell textTop={product?.category?.name || "-"} />
  ),
  supplier: (product: ProductoUi) => (
    <SimpleCell textTop={product?.supplier?.name || "-"} />
  ),
  salePrice: (product: ProductoUi) => (
    <SimpleCell textTop={`$${formatPrice(product.salePrice)}`} />
  ),
  stock: (product: ProductoUi) => <SimpleCell textTop={product.stock || "-"} />,
  state: (product: ProductoUi) => (
    <ChipCell
      colorText={statusProductMap[product?.state?.name].color}
      colorDot={statusProductMap[product?.state?.name].dot}
      texto={product?.state?.name}
    />
  ),
  acciones: (product: ProductoUi) => (
    <ActionsCell
      onEdit={() => onEdit(product)}
      onView={() => onView(product)}
      onDelete={() => onDelete(product)}
    />
  ),
});
