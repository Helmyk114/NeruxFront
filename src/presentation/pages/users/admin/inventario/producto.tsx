import { useProductoPaginate } from "@/app/hook";
import {
  useActionTables,
  usePageState,
  useRedirect,
} from "@/presentation/components/hook";
import { VerProducto } from "@/presentation/components/ui/organism/drawer/inventario/productos/viewProductoDrawer";
import { TableBase } from "@/presentation/components/ui/organism/table/tableBase";
import { MainPageTemplate } from "@/presentation/components/ui/template";
import { ProductColumnRender } from "@/presentation/config/table/columnRender";
import { productoColumns } from "@/presentation/config/table/columns";

export function Products(): JSX.Element {
  const { currentPage, setCurrentPage, pageSize, setPageSize } = usePageState();
  const redirect = useRedirect();

  const { data, metadata, loading, error } = useProductoPaginate({
    currentPage,
    pageSize,
  });

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
      <MainPageTemplate
        titulo1="Productos"
        titulo2="Consulta, organiza y gestiona fácilmente todos tus productos en inventario."
        mainContent={
          <TableBase
            tabla="Productos"
            nameButton="Nuevo producto +"
            onclick={handleCreate}
            columnas={productoColumns}
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
