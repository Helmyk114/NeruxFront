import { Category } from "../../../../../../domain/entities/category"
import { ActionsCell, SimpleCell } from "../../../../../components/ui/atomos"
import { ColumnRender } from "../../../../../components/ui/organismo"

export const CategoriaColumnRender = (
  onEdit: (categoria: Category) => void,
  onView: (categoria: Category) => void,
  onDelete: (categoria: Category) => void
): ColumnRender<Category> => ({
  name: (categoria: Category) => <SimpleCell textTop={categoria.name || ""} />,
  description: (categoria: Category) => <SimpleCell textTop={categoria.description || ""} />,
  acciones: (categoria: Category) => (
    <ActionsCell
      onEdit={() => onEdit(categoria)}
      onView={() => onView(categoria)}
      onDelete={() => onDelete(categoria)}
    />
  ),
})