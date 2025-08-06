import { useState } from "react";
import { Producto } from "@/domain";
import {
  useActionTables,
  UseFetchGet,
  useRedirect,
} from "@/presentacion/components/hook";
import {
  Sidebar,
  TableSimple,
  TemplatePageTable,
} from "@/presentacion/components/ui";
import { ProductColumnRender, columnsProductos } from "@/presentacion/config";
import { VerProducto } from "./VerProducto";

export function Products(): JSX.Element {
  const redirect = useRedirect();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { data, metadata, loading, error } = UseFetchGet<Producto>("/product", {
    paginated: true,
    currentPage,
    pageSize,
    reload: false,
    enable: true,
  });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const {
    handleEdit,
    handleView,
    handleDelete,
    drawer,
    selectedItem,
    mode,
    setMode,
  } = useActionTables<number | string>(
    undefined,
    // async (id) => {
    //   await productUseCase.deleteProduct("/product", id);
    // },
    (id) => redirect(`/Producto/${id}`)
  );

  return (
    <>
      <TemplatePageTable
        sideBar={<Sidebar />}
        titulo1="Productos"
        titulo2="Consulta, organiza y gestiona fácilmente todos tus productos en inventario."
        mainContent={
          <TableSimple
            tabla="Productos"
            nameButton="Nuevo producto +"
            onclick={() => redirect("/Productos/Crear")}
            columnas={columnsProductos}
            columnRender={ProductColumnRender(
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
        }
      />
      {mode === "ver" && (
        <VerProducto
          isOpen={drawer.isOpen}
          onClose={drawer.onOpenChange}
          id={selectedItem}
          setMode={setMode}
          onOpen={drawer.onOpen}
        />
      )}
    </>
  );
}
