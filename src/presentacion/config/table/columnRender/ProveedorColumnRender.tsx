import { Proveedor } from "@/domain";
import { ActionsCell, SimpleCell } from "@/presentacion/components/ui/atomos";
import { ColumnRender } from "@/shared/types/columRenderType";


export const ProveedorColumnRender = (
  onEdit: (proveedor: Proveedor) => void,
  onView: (proveedor: Proveedor) => void,
  onDelete: (proveedor: Proveedor) => void
): ColumnRender<Proveedor> => ({
  name: (proveedor: Proveedor) => (
    <SimpleCell textTop={proveedor.name || ""} />
  ),
  business: (proveedor: Proveedor) => (
    <SimpleCell textTop={proveedor.supplier || "-"} />
  ),
  phone: (proveedor: Proveedor) => (
    <SimpleCell textTop={proveedor.phone || ""} />
  ),
  email: (proveedor: Proveedor) => (
    <SimpleCell textTop={proveedor.email || "-"} />
  ),
  acciones: (proveedor: Proveedor) => (
    <ActionsCell
      onEdit={() => onEdit(proveedor)}
      onView={() => onView(proveedor)}
      onDelete={() => onDelete(proveedor)}
    />
  ),
})