import { useState } from "react";
import { useDisclosure } from "@heroui/react";
import { InfoProduct } from "./productType";

import { UseFetchGetPaginatio, useRedirect } from "../../../../components/hook";
import { TemplatePageTable } from "../../../../components/ui/template/plantillaPages";

import Drawer1 from "../../../../components/ui/organismo/tablas/config/drawerPrueba";

import { Sidebar, TableSimple } from "../../../../components/ui/organismo";
import { columnsProductos } from "./columnsProducts";
import { ProductColumnRender } from "./ProductColumnRender";

export function Products(): JSX.Element {
  const redirect = useRedirect();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentePage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const { data, metadata, loading, error } = UseFetchGetPaginatio<InfoProduct>(
    "/info/products",
    currentePage,
    pageSize
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleEdit = (product: InfoProduct) => {
    console.log("Editando:", product.idProduct);
    // Lógica para editar
  };

  const handleView = () => {
    onOpen();
  };

  const handleDelete = () => {
    console.log("hola");
  };

  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      mainContent={
        <>
          <h1 className="font-bold text-3xl">Lista de productos</h1>

          <TableSimple
            tabla="Productos"
            onclick={() => redirect("/Crear/Producto")}
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

          <Drawer1 isOpen={isOpen} onClose={() => onOpenChange()} />
        </>
      }
    />
  );
}
