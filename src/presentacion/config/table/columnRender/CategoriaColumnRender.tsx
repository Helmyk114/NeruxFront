import { ColumnRender } from "@/shared/types/columRenderType";
import { ActionsCell, SimpleCell } from "@/presentacion/components/ui/atomos";
import { Categoria } from "@/domain/interface/inventario/categoria";

export const CategoriaColumnRender = (
  onEdit: (categoria: Categoria) => void,
  onView: (categoria: Categoria) => void,
  onDelete: (categoria: Categoria) => void
): ColumnRender<Categoria> => ({
  name: (categoria: Categoria) => (
    <SimpleCell textTop={categoria.name || ""} />
  ),
  description: (categoria: Categoria) => (
    <SimpleCell textTop={categoria.description || ""} />
  ),
  acciones: (categoria: Categoria) => (
    <ActionsCell
      onEdit={() => onEdit(categoria)}
      onView={() => onView(categoria)}
      onDelete={() => onDelete(categoria)}
      config={{
        edit: { disable: categoria.isDefault },
        delete: { disable: categoria.isDefault },
      }}
    />
  ),
});
