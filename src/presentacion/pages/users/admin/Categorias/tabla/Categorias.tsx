import { useState } from "react";
import { TemplatePageTable } from "../../../../../components/ui/template/plantillaPages";
import { TemplateFormNoData } from "../../../../../components/ui/template/plantillaFormNoData";
import { Sidebar, TableSimple } from "../../../../../components/ui/organismo";
import {
  useActionTables,
  UseFetchGetPaginatio,
} from "../../../../../components/hook";
import { columnsCategoria } from "./columnsCategoria";
import { CategoriaColumnRender } from "./CategoriaColumnRender";
import { InfoCategoria } from "./cateroriaType";
import { CategoriasFormDrawer } from "../../../../../components/ui/organismo/forms/Categorias/CategoriasFormDrawer";

export function Category(): JSX.Element {
  const [currentePage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [reload, setReload] = useState(false);
  const { data, metadata, loading, error } =
    UseFetchGetPaginatio<InfoCategoria>("/categories", currentePage, pageSize, reload);
    
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const {
    handleEdit,
    handleView,
    handleDelete,
    handleCreate,
    //selectedItem,
    isOpen,
    onOpenChange,
  } = useActionTables<InfoCategoria>();

  return (
    <TemplatePageTable
      titulo1="Categorías de productos"
      titulo2="Organiza tus productos agrupándolos por tipo o uso."
      sideBar={<Sidebar />}
      mainContent={
        <>
          {data && data.length > 0 ? (
            <>
              <TableSimple
                tabla="Categorías"
                nameButton="Nueva categoría +"
                onclick={handleCreate}
                columnas={columnsCategoria}
                columnRender={CategoriaColumnRender(
                  handleEdit,
                  handleView,
                  handleDelete
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
            </>
          ) : (
            <TemplateFormNoData
              descripcion1="¡EMPECEMOS A ORDENAR TODO!"
              descripcion2="Usarlas te ayudará a mantener tus productos organizados por tipo o uso. 
              ¡Puedes crear una nueva ahora mismo desde el botón “Nueva categoría”!"
              onClick={handleCreate}
            />
          )}

          <CategoriasFormDrawer isOpen={isOpen} onClose={onOpenChange} onSuccess={() => setReload(prev => !prev)}/>
        </>
      }
    />
  );
}
