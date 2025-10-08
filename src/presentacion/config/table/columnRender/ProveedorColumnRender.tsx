import { ActionsCell, SimpleCell } from "@/presentacion/components/ui/atomos";
import { ProveedorPaginateUi } from "@/presentacion/models";
import { ColumnRender } from "@/shared/types/columRenderType";

export const ProveedorColumnRender = (
  onEdit: (proveedor: ProveedorPaginateUi) => void,
  onView: (proveedor: ProveedorPaginateUi) => void,
  onDelete: (proveedor: ProveedorPaginateUi) => void
): ColumnRender<ProveedorPaginateUi> => ({
  name: (proveedor: ProveedorPaginateUi) => (
    <SimpleCell textTop={proveedor.name || ""} />
  ),
  supplier: (proveedor: ProveedorPaginateUi) => (
    <SimpleCell textTop={proveedor.supplier || "-"} />
  ),
  phone: (proveedor: ProveedorPaginateUi) => (
    <SimpleCell textTop={proveedor.phone || ""} />
  ),
  email: (proveedor: ProveedorPaginateUi) => (
    <SimpleCell textTop={proveedor.email || "-"} />
  ),
  acciones: (proveedor: ProveedorPaginateUi) => (
    <ActionsCell
      onEdit={() => onEdit(proveedor)}
      onView={() => onView(proveedor)}
      onDelete={() => onDelete(proveedor)}
    />
  ),
});
