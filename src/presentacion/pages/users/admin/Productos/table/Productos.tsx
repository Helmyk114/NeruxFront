import { useState } from "react";
import { InfoProduct } from "./productType";
import {
  useActionTables,
  UseFetchGet,
  useRedirect,
} from "../../../../../components/hook";
import { TemplatePageTable } from "../../../../../components/ui/template/plantillaPages";
import { Sidebar, TableSimple } from "../../../../../components/ui/organismo";
import { columnsProductos } from "./columnsProducts";
import { ProductColumnRender } from "./ProductColumnRender";

export function Products(): JSX.Element {
  const redirect = useRedirect();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { data, metadata, loading, error } = UseFetchGet<InfoProduct>(
    "/product",
    { paginated: true, currentPage, pageSize, reload: false, enable: true }
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const {
    handleEdit,
    handleView,
    handleDelete,
  } = useActionTables<number | string>();

  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      titulo1="Productos"
      titulo2="Consulta, organiza y gestiona fácilmente todos tus productos en inventario."
      mainContent={
        <>
          <TableSimple
            tabla="Productos"
            nameButton="Nuevo producto +"
            onclick={() => redirect("/Productos/Crear")}
            columnas={columnsProductos}
            columnRender={ProductColumnRender(
              (item) => handleEdit(item.idProduct),
              (item) => handleView(item.idProduct),
              (item) => handleDelete(item.idProduct)
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

        </>
      }
    />
  );
}
