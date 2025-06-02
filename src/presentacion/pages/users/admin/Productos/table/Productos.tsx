import { useState } from "react";
import { InfoProduct } from "./productType";

import {
  useActionTables,
  UseFetchGetPaginatio,
  useRedirect,
} from "../../../../../components/hook";
import { TemplatePageTable } from "../../../../../components/ui/template/plantillaPages";

import Drawer1 from "../../../../../components/ui/organismo/tablas/config/drawerPrueba";

import { Sidebar, TableSimple } from "../../../../../components/ui/organismo";
import { columnsProductos } from "./columnsProducts";
import { ProductColumnRender } from "./ProductColumnRender";

export function Products(): JSX.Element {
  const redirect = useRedirect();
  const [currentePage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { data, metadata, loading, error } = UseFetchGetPaginatio<InfoProduct>(
    "/product",
    currentePage,
    pageSize
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const {
    handleEdit,
    handleView,
    handleDelete,
    selectedItem,
    isOpen,
    onOpenChange,
  } = useActionTables<InfoProduct>();

  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      titulo1="Productos"
      titulo2="Lista de productos"
      mainContent={
        <>
          <TableSimple
            tabla="Productos"
            nameButton="Nuevo producto +"
            onclick={() => redirect("/Productos/Crear")}
            columnas={columnsProductos}
            columnRender={ProductColumnRender(
              handleEdit,
              handleView,
              handleDelete
            )}
            data={data || []}
            getRowKey={(item) => item.idProduct}
            isLoading={loading}
            error={error?.message}
            page={metadata?.currentPage || 1}
            totalPages={metadata?.totalPages || 1}
            setPage={handlePageChange}
            totalItems={metadata.totalItems}
            setPageSize={setPageSize}
          />

          {selectedItem && (
            <Drawer1 isOpen={isOpen} onClose={() => onOpenChange()} />
          )}
        </>
      }
    />
  );
}
