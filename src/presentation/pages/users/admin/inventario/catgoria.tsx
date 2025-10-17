import { useCategoriaPaginate, useDeleteCategoria } from "@/app/hook";
import { useActionTables, usePageState } from "@/presentation/components/hook";
import { CategoriasFormDrawer } from "@/presentation/components/ui/organism/drawer/inventario/categoria/formCategoriaDrawer";
import { VerCategorias } from "@/presentation/components/ui/organism/drawer/inventario/categoria/viewCategoriaDrawer";
import { TableBase } from "@/presentation/components/ui/organism/table/tableBase";
import {
  MainPageTemplate,
  NoDataTemplate,
} from "@/presentation/components/ui/template";
import { CategoriaColumnRender } from "@/presentation/config/table/columnRender";
import { categoriaColumns } from "@/presentation/config/table/columns";
import { DeleteConfirmPopUp } from "@/shared/utils/popUps/delete";
import { IconFolderOpen } from "@tabler/icons-react";
import { useState } from "react";

export function Categories(): JSX.Element {
  const { currentPage, setCurrentPage, pageSize, setPageSize } = usePageState();
  const [reload, setReload] = useState(false);

  const { data, metadata, loading, error } = useCategoriaPaginate(
    { currentPage, pageSize },
    reload
  );

  const { mutate: remove } = useDeleteCategoria(() => {
    setReload((prev) => !prev);
  });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const {
    handleEdit,
    handleView,
    handleDelete,
    handleDeleteConfirm,
    handleCreate,
    selectedItem,
    setMode,
    mode,
    drawer,
    popUp,
  } = useActionTables<string>(async (id) => {
    await remove({ id });
  });

  return (
    <MainPageTemplate
      titulo1="Categorías de productos"
      titulo2="Organiza tus productos agrupándolos por tipo o uso."
      mainContent={
        <>
          {(metadata.totalItems ?? 0) > 1 ? (
            <TableBase
              tabla="Categorías"
              nameButton="Nueva categoría +"
              onclick={handleCreate}
              columnas={categoriaColumns}
              columnRender={CategoriaColumnRender(
                (item) => handleEdit(item.id as string),
                (item) => handleView(item.id as string),
                (item) => handleDelete(item.id as string)
              )}
              data={data || []}
              getRowKey={(item) => item.id as string}
              isLoading={loading}
              error={error?.message}
              page={metadata?.currentPage || 1}
              totalPages={metadata?.totalPages || 1}
              setPage={handlePageChange}
              totalItems={metadata.totalItems}
              setPageSize={setPageSize}
            />
          ) : (
            <NoDataTemplate
              icon={<IconFolderOpen className="text-brand-first" size={100} />}
              descripcion1="¡EMPECEMOS A ORDENAR TODO!"
              descripcion2="Usarlas te ayudará a mantener tus productos organizados por tipo o uso. 
              ¡Puedes crear una nueva ahora mismo desde el botón “Nueva categoría”!"
              textButton="Nueva categoría +"
              onClick={handleCreate}
            />
          )}

          {(mode === "crear" || mode === "editar") && (
            <CategoriasFormDrawer
              isOpen={drawer.isOpen}
              onClose={drawer.onOpenChange}
              onSuccess={() => setReload((prev) => !prev)}
              id={selectedItem}
              mode={mode}
            />
          )}
          {mode === "ver" && (
            <VerCategorias
              isOpen={drawer.isOpen}
              onClose={drawer.onOpenChange}
              id={selectedItem}
              setMode={setMode}
              onOpen={drawer.onOpen}
            />
          )}
          <DeleteConfirmPopUp
            isOpen={popUp.isOpen}
            onClose={popUp.onClose}
            titulo="Eliminar categoría"
            startText="¿Estás seguro de que querés eliminar esta categoría?
            Los productos asociados quedarán como "
            endText="Sin categoría."
            textButton="Cancelar"
            onClick={popUp.onClose}
            secondTextButton="Eliminar"
            onSecondClick={handleDeleteConfirm}
          />
        </>
      }
    />
  );
}
