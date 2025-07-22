import {
  useActionTables,
  useFetchPaginated,
  usePageState,
} from "@/presentacion/components/hook";
import { columnsProveedor, ProveedorColumnRender } from "@/presentacion/config";
import { useState } from "react";
import { ProveedorFormDrawer } from "./ProveedorFormDrawer";
import { VerProveedores } from "./verProveedor";
import { DeleteConfirmPopUp } from "@/shared/utils/popUps/delete";
import { Proveedor, proveedoresUseCase } from "@/domain";
import {
  Sidebar,
  TableSimple,
  TemplateFormNoData,
  TemplatePageTable,
} from "@/presentacion/components/ui";

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
    handleDeleteConfirm,
    handleCreate,
    selectedItem,
    setMode,
    mode,
    drawer,
    popUp,
  } = useActionTables<number | string>(async (id) => {
    await proveedoresUseCase.delete("/supplier", id);
    setReload((prev) => !prev);
  });

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
              isOpen={drawer.isOpen}
              onClose={drawer.onOpenChange}
              onSuccess={() => setReload((prev) => !prev)}
              id={selectedItem}
              mode={mode}
            />
          )}
          {mode === "ver" && (
            <VerProveedores
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
            endText="Sin categoría"
            textButton="Cancelar"
            onClick={popUp.onClose}
            secondTextButton="Eliminar"
            onSecondClick={handleDeleteConfirm }
          />
        </>
      }
    />
  );
}
