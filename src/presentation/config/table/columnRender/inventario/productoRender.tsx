import { statusProductMap } from "@/common/constant/mapping";
import { ColumnRender } from "@/common/types";
import {
  ActionsCell,
  ChipCell,
  ImgCellSimple,
  SimpleCell,
} from "@/presentation/components/ui/molecule/table/cell";
import { ProductoPaginateUi } from "@/presentation/models";

export const ProductColumnRender = (
  onEdit: (product: ProductoPaginateUi) => void,
  onView: (product: ProductoPaginateUi) => void,
  onDelete: (product: ProductoPaginateUi) => void
): ColumnRender<ProductoPaginateUi> => ({
  name: (product: ProductoPaginateUi) => (
    <ImgCellSimple textTop={product.name} />
  ),
  sku: (product: ProductoPaginateUi) => (
    <SimpleCell textTop={product.sku || "-"} />
  ),

  category: (product: ProductoPaginateUi) => (
    <SimpleCell textTop={product?.categoria || "-"} />
  ),
  supplier: (product: ProductoPaginateUi) => (
    <SimpleCell textTop={product?.proveedor || "-"} />
  ),
  salePrice: (product: ProductoPaginateUi) => (
    <SimpleCell textTop={`$ ${product?.salePrice}`} />
  ),
  stock: (product: ProductoPaginateUi) => (
    <SimpleCell textTop={product.stock || "-"} />
  ),
  state: (product: ProductoPaginateUi) => (
    <ChipCell
      colorText={statusProductMap[product?.state || ""].color}
      colorDot={statusProductMap[product?.state || ""].dot}
      texto={product?.state || ""}
    />
  ),
  acciones: (product: ProductoPaginateUi) => (
    <ActionsCell
      onEdit={() => onEdit(product)}
      onView={() => onView(product)}
      onDelete={() => onDelete(product)}
    />
  ),
});
