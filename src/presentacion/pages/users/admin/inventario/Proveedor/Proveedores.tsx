import { Proveedor } from "@/domain/entities";
import {
  useActionTables,
  useFetchPaginated,
  usePageState,
} from "@/presentacion/components/hook";
import { Sidebar, TableSimple } from "@/presentacion/components/ui/organismo";
import {
  TemplateFormNoData,
  TemplatePageTable,
} from "@/presentacion/components/ui/template";
import { columnsProveedor, ProveedorColumnRender } from "@/presentacion/config";
import { useState } from "react";
import { proveedoresUseCase } from "@/domain/usecases/inventario/categoria/proveedor.useCase";
import { ProveedorFormDrawer } from "./ProveedorFormDrawer";
import { VerProveedores } from "./verProveedor";


export function Proveedores(): JSX.Element {
  const { currentPage, setCurrentPage, pageSize, setPageSize } = usePageState();
  const [reload, setReload] = useState(false);

  const { data, metadata, loading, error } = useFetchPaginated<Proveedor>(
    (options) =>
      proveedoresUseCase.getPaginated(
        "/suppliers",
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
    handleCreate,
    selectedItem,
    setMode,
    mode,
    onOpen,
    isOpen,
    onOpenChange,
  } = useActionTables<number | string>(
    async (id) => {
      await proveedoresUseCase.delete("/supplier", id);
      setReload((prev) => !prev);
    }
  );

  return (
    <TemplatePageTable
      titulo1="Proveedores"
      titulo2="Gestioná fácilmente la información de tus proveedores."
      sideBar={<Sidebar />}
      mainContent={
        <>
          {data && data.length > 0 ? (
            <>
              <TableSimple
                tabla="Proveedores"
                nameButton="Nuevo proveedor +"
                onclick={handleCreate}
                columnas={columnsProveedor}
                columnRender={ProveedorColumnRender(
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
                totalItems={metadata?.totalItems}
                setPageSize={setPageSize}
              />
            </>
          ) : (
            <TemplateFormNoData
              descripcion1="¡AÚN NO HAY PROVEEDORES!"
              descripcion2=" Agregarlos te permitirá llevar un mejor control de quién te surte tus productos. 
              ¡Puedes crear uno ahora mismo desde el botón “Nuevo proveedor”!"
              textButton="Crear proveedor +"
              onClick={handleCreate}
            />
          )}

          {(mode === "crear" || mode === "editar") && (
            <ProveedorFormDrawer
              isOpen={isOpen}
              onClose={onOpenChange}
              onSuccess={() => setReload((prev) => !prev)}
              id={selectedItem}
              mode={mode}
            />
          )}
          {mode === "ver" && (
            <VerProveedores
              isOpen={isOpen}
              onClose={onOpenChange}
              id={selectedItem}
              setMode={setMode}
              onOpen={onOpen}
            />
          )}
        </>
      }
    />
  );
}
