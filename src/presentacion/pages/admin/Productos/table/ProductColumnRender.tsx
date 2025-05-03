import { statusProductMap } from "../../../../../shared/constants/colors/statusProductMap";
import {
  ActionsCell,
  ChipCell,
  ImgCellSimple,
  SimpleCell,
} from "../../../../components/ui/atomos";
import { ColumnRender } from "../../../../components/ui/organismo/tablas/config/columRenderType";
import { InfoProduct } from "./productType";

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
  sku: (product: InfoProduct) => <SimpleCell textTop={product.sku || ""} />,
  categoria: (product: InfoProduct) => (
    <SimpleCell textTop={product.categoria || ""} />
  ),
  precio: (product: InfoProduct) => (
    <SimpleCell textTop={product.precio || ""} />
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
  registro: (product: InfoProduct) => (
    <SimpleCell textTop={product.registro || ""} />
  ),
  acciones: (product: InfoProduct) => (
    <ActionsCell
      onEdit={() => onEdit(product)}
      onView={() => onView(product)}
      onDelete={() => onDelete(product)}
    />
  ),
});
