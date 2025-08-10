import { statusProductMap } from "../../../../shared/constants/colors/statusProductMap";
import {
  ActionsCell,
  ChipCell,
  ImgCellSimple,
  SimpleCell,
} from "../../../components/ui/atomos";
import { ColumnRender } from "../../../../shared/types/columRenderType";
import { ProductoFront } from "@/adapter/inventario/productoUi";
import { formatDate, formatPrice } from "@/shared";

export const ProductColumnRender = (
  onEdit: (product: ProductoFront) => void,
  onView: (product: ProductoFront) => void,
  onDelete: (product: ProductoFront) => void
): ColumnRender<ProductoFront> => ({
  producto: (product: ProductoFront) => (
    <ImgCellSimple textTop={product.name} />
  ),
  sku: (product: ProductoFront) => <SimpleCell textTop={product.id || ""} />,

  categoria: (product: ProductoFront) => (
    <SimpleCell textTop={product.category || ""} />
  ),
  salePrice: (product: ProductoFront) => (
    <SimpleCell textTop={formatPrice(product.salePrice) || ""} />
  ),
  costoProduccion: (product: ProductoFront) => (
    <SimpleCell textTop={product.salePrice || ""} />
  ),
  stock: (product: ProductoFront) => (
    <SimpleCell textTop={product.stock || ""} />
  ),
  inventario: (product: ProductoFront) => (
    <SimpleCell textTop={product.stock || ""} />
  ),
  estado: (product: ProductoFront) => (
    <ChipCell
      colorText={statusProductMap[product.estado].color}
      colorDot={statusProductMap[product.estado].dot}
      texto={product.estado}
    />
  ),
  create_in: (product: ProductoFront) => (
    <SimpleCell textTop={formatDate(product.create_in) || ""} />
  ),
  acciones: (product: ProductoFront) => (
    <ActionsCell
      onEdit={() => onEdit(product)}
      onView={() => onView(product)}
      onDelete={() => onDelete(product)}
    />
  ),
});
