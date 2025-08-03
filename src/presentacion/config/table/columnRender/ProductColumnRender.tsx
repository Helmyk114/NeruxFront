import { statusProductMap } from "../../../../shared/constants/colors/statusProductMap";
import {
  ActionsCell,
  ChipCell,
  ImgCellSimple,
  SimpleCell,
} from "../../../components/ui/atomos";
import { ColumnRender } from "../../../../shared/types/columRenderType";
import { numberFormat } from "../../../../shared/utils/convert/numberFormat";
import { fechaFormat } from "../../../../shared/utils/convert/fechaFormat";
import { Producto } from "@/domain";

export const ProductColumnRender = (
  onEdit: (product: Producto) => void,
  onView: (product: Producto) => void,
  onDelete: (product: Producto) => void
): ColumnRender<Producto> => ({
  producto: (product: Producto) => (
    <ImgCellSimple avatar={product.photoProduct || ""} textTop={product.name} />
  ),
  sku: (product: Producto) => <SimpleCell textTop={product.sku || ""} />,

  categoria: (product: Producto) => (
    <SimpleCell textTop={product.category || ""} />
  ),
  salePrice: (product: Producto) => (
    <SimpleCell textTop={numberFormat(product.salePrice) || ""} />
  ),
  costoProduccion: (product: Producto) => (
    <SimpleCell textTop={product.costoProduccion || ""} />
  ),
  stock: (product: Producto) => <SimpleCell textTop={product.stock || ""} />,
  inventario: (product: Producto) => (
    <SimpleCell textTop={product.inventario || ""} />
  ),
  estado: (product: Producto) => (
    <ChipCell
      colorText={statusProductMap[product.estado].color}
      colorDot={statusProductMap[product.estado].dot}
      texto={product.estado}
    />
  ),
  create_in: (product: Producto) => (
    <SimpleCell textTop={fechaFormat(product.create_in) || ""} />
  ),
  acciones: (product: Producto) => (
    <ActionsCell
      onEdit={() => onEdit(product)}
      onView={() => onView(product)}
      onDelete={() => onDelete(product)}
    />
  ),
});
