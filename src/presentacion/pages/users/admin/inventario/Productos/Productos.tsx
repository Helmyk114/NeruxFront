import {
  useActionTables,
  usePageState,
  useRedirect,
} from "@/presentacion/components/hook";
import {
  TableSimple,
  TemplatePageTable,
} from "@/presentacion/components/ui";
import { ProductColumnRender, columnsProductos } from "@/presentacion/config";
import { VerProducto } from "./VerProducto";
import { useProductoPaginate } from "@/presentacion/components/hook/inventario/Productos/useProductoPaginate";

export function Products(): JSX.Element {
  const { currentPage, setCurrentPage, pageSize, setPageSize } = usePageState();
  const redirect = useRedirect();

  const { data, metadata, loading, error } = useProductoPaginate(
    currentPage,
    pageSize,
  );
  
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  
  const {
    handleEdit,
    handleView,
    handleDelete,
    handleCreate,
    drawer,
    selectedItem,
    mode,
    setMode,
  } = useActionTables<string>(
    undefined,
    // async (id) => {
    //   await productUseCase.deleteProduct("/product", id);
    // },
    (id) => redirect(`/Productos/${id}`),
    "/Productos/Crear"
  );

  return (
    <>
      <TemplatePageTable
        titulo1="Productos"
        titulo2="Consulta, organiza y gestiona fácilmente todos tus productos en inventario."
        mainContent={
          <TableSimple
            tabla="Productos"
            nameButton="Nuevo producto +"
            onclick={handleCreate}
            columnas={columnsProductos}
            columnRender={ProductColumnRender(
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
