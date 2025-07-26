import { useState } from "react";
import {
  TemplatePageTable,
  TemplateFormNoData,
} from "@/presentacion/components/ui/template";
import { DeleteConfirmPopUp } from "@/shared";
import { useActionTables, useFetchPaginated } from "@/presentacion/components/hook";
import { categoriasUseCase, Category } from "@/domain";
import { Sidebar, TableSimple } from "@/presentacion/components/ui";
import { CategoriaColumnRender, columnsCategoria } from "@/presentacion/config";
import { CategoriasFormDrawer } from "./CategoriasFormDrawer";
import { VerCategorias } from "./verCategorias";

export function Categories(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [reload, setReload] = useState(false);

  const { data, metadata, loading, error } = useFetchPaginated<Category>(
    (options) =>
      categoriasUseCase.getPaginated(
        "/categories",
        options.currentPage ?? 1,
        options.pageSize ?? 5
      ),
    {
      currentPage,
      pageSize,
      enable: true,
      reload,
    }
  );

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
  } = useActionTables<number | string>(async (id) => {
    await categoriasUseCase.delete("/category", id);
    setReload((prev) => !prev);
  });

  return (
    <TemplatePageTable
      titulo1="Categorías de productos"
      titulo2="Organiza tus productos agrupándolos por tipo o uso."
      sideBar={<Sidebar />}
      mainContent={
        <>
          {data && data.length > 1 ? (
            <TableSimple
              tabla="Categorías"
              nameButton="Nueva categoría +"
              onclick={handleCreate}
              columnas={columnsCategoria}
              columnRender={CategoriaColumnRender(
                (item) => handleEdit(item.id),
                (item) => handleView(item.id),
                (item) => handleDelete(item.id)
              )}
              data={data || []}
              getRowKey={(item) => item.id}
              isLoading={loading}
              error={error?.message}
              page={metadata?.currentPage || 1}
              totalPages={metadata?.totalPages || 1}
              setPage={handlePageChange}
              totalItems={metadata.totalItems}
              setPageSize={setPageSize}
            />
          ) : (
            <TemplateFormNoData
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
