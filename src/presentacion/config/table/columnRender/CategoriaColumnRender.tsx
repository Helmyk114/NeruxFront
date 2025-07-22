import { ColumnRender } from "@/shared/types/columRenderType";
import { Category } from "@/domain";
import { ActionsCell, SimpleCell } from "@/presentacion/components/ui/atomos";

export const CategoriaColumnRender = (
  onEdit: (categoria: Category) => void,
  onView: (categoria: Category) => void,
  onDelete: (categoria: Category) => void
): ColumnRender<Category> => ({
  name: (categoria: Category) => <SimpleCell textTop={categoria.name || ""} />,
  description: (categoria: Category) => (
    <SimpleCell textTop={categoria.description || ""} />
  ),
  acciones: (categoria: Category) => (
    <ActionsCell
      onEdit={() => onEdit(categoria)}
      onView={() => onView(categoria)}
      onDelete={() => onDelete(categoria)}
    />
  ),
});
