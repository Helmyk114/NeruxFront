import { statusProductMap } from "../../../../../shared/constants/colors/statusProductMap";
import {
  ActionsCell,
  ChipCell,
  ImgCellSimple,
  SimpleCell,
} from "../../../../components/ui/atomos";
import { ColumnRender } from "../../../../components/ui/organismo/tablas/config/columRenderType";
import { InfoProduct } from "./productType";
import { numberFormat } from "../../../../../shared/utils/convert/numberFormat";
import { fechaFormat } from "../../../../../shared/utils/convert/fechaFormat";

export const ProductColumnRender = (
  onEdit: (product: InfoProduct) => void,
  onView: (product: InfoProduct) => void,
  onDelete: (product: InfoProduct) => void
): ColumnRender<InfoProduct> => ({
  producto: (product: InfoProduct) => (
    <ImgCellSimple
      avatar={product.photoProduct || ""}
      textTop={product.nameProduct}
    />
  ),
  sku: (product: InfoProduct) => (<SimpleCell textTop={product.sku || ""} />),

  categoria: (product: InfoProduct) => (
    <SimpleCell textTop={product.categoria || ""} />
  ),
  salePrice: (product: InfoProduct) => (
    <SimpleCell textTop={numberFormat(product.salePrice) || ""} />
  ),
  costoProduccion: (product: InfoProduct) => (
    <SimpleCell textTop={product.costoProduccion || ""} />
  ),
  stock: (product: InfoProduct) => <SimpleCell textTop={product.stock || ""} />,
  inventario: (product: InfoProduct) => (
    <SimpleCell textTop={product.inventario || ""} />
  ),
  estado: (product: InfoProduct) => (
    <ChipCell
      colorText={statusProductMap[product.estado].color}
      colorDot={statusProductMap[product.estado].dot}
      texto={product.estado}
    />
  ),
  create_in: (product: InfoProduct) => (
    <SimpleCell textTop={fechaFormat(product.create_in) || ""} />
  ),
  acciones: (product: InfoProduct) => (
    <ActionsCell
      onEdit={() => onEdit(product)}
      onView={() => onView(product)}
      onDelete={() => onDelete(product)}
    />
  ),
});
