import { ColumnRender } from "@/common/types";
import { CategoriaPaginateUi } from "@/presentation/models";
import {
  ActionsCell,
  SimpleCell,
} from "@/presentation/components/ui/molecule/table/cell";

export const CategoriaColumnRender = (
  onEdit: (categoria: CategoriaPaginateUi) => void,
  onView: (categoria: CategoriaPaginateUi) => void,
  onDelete: (categoria: CategoriaPaginateUi) => void
): ColumnRender<CategoriaPaginateUi> => ({
  name: (categoria: CategoriaPaginateUi) => (
    <SimpleCell textTop={categoria.name || ""} />
  ),
  description: (categoria: CategoriaPaginateUi) => (
    <SimpleCell textTop={categoria.description || ""} />
  ),
  acciones: (categoria: CategoriaPaginateUi) => (
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
