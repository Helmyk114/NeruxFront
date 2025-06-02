import { ActionsCell, SimpleCell } from "../../../../../components/ui/atomos"
import { ColumnRender } from "../../../../../components/ui/organismo"
import { InfoCategoria } from "./cateroriaType"

export const CategoriaColumnRender = (
  onEdit: (categoria: InfoCategoria) => void,
  onView: (categoria: InfoCategoria) => void,
  onDelete: (categoria: InfoCategoria) => void
): ColumnRender<InfoCategoria> => ({
  name: (categoria: InfoCategoria) => <SimpleCell textTop={categoria.name || ""} />,
  description: (categoria: InfoCategoria) => <SimpleCell textTop={categoria.description || ""} />,
  acciones: (categoria: InfoCategoria) => (
    <ActionsCell
      onEdit={() => onEdit(categoria)}
      onView={() => onView(categoria)}
      onDelete={() => onDelete(categoria)}
    />
  ),
})