import { statusProductMap } from "@/shared/constants/colors/statusProductMap";
import {
  ActionsCell,
  ChipCell,
  ImgCellSimple,
  SimpleCell,
} from "../../../components/ui/atomos";
import { ColumnRender } from "@/shared/types/columRenderType";
import { Producto } from "@/domain/interface";

export const ProductColumnRender = (
  onEdit: (product: Producto) => void,
  onView: (product: Producto) => void,
  onDelete: (product: Producto) => void
): ColumnRender<Producto> => ({
  name: (product: Producto) => <ImgCellSimple textTop={product.name} />,
  sku: (product: Producto) => <SimpleCell textTop={product.sku || "-"} />,

  category: (product: Producto) => (
    <SimpleCell textTop={product?.category || "-"} />
  ),
  supplier: (product: Producto) => (
    <SimpleCell textTop={product?.supplier || "-"} />
  ),
  salePrice: (product: Producto) => (
    <SimpleCell textTop={`$ ${product?.salePrice}`} />
  ),
  stock: (product: Producto) => <SimpleCell textTop={product.stock || "-"} />,
  state: (product: Producto) => (
    <ChipCell
      colorText={statusProductMap[product?.state || ""].color}
      colorDot={statusProductMap[product?.state || ""].dot}
      texto={product?.state || ""}
    />
  ),
  acciones: (product: Producto) => (
    <ActionsCell
      onEdit={() => onEdit(product)}
      onView={() => onView(product)}
      onDelete={() => onDelete(product)}
    />
  ),
});
