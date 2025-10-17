import { useDeleteProveedor, useProveedorPaginate } from "@/app/hook";
import { useActionTables, usePageState } from "@/presentation/components/hook";
import { TableBase } from "@/presentation/components/ui/organism/table/tableBase";
import { useState } from "react";
import { ProveedorColumnRender } from "@/presentation/config/table/columnRender";
import { ProveedorFormDrawer } from "@/presentation/components/ui/organism/drawer/inventario/proveedor/formProveedorDrawer";
import { IconPackage } from "@tabler/icons-react";
import { VerProveedores } from "@/presentation/components/ui/organism/drawer/inventario/proveedor/viewProveedorDrawer";
import { DeleteConfirmPopUp } from "@/shared/utils/popUps/delete";
import {
  MainPageTemplate,
  NoDataTemplate,
} from "@/presentation/components/ui/template";
import { proveedorColumns } from "@/presentation/config/table/columns";

export function Proveedores(): JSX.Element {
  const { currentPage, setCurrentPage, pageSize, setPageSize } = usePageState();
  const [reload, setReload] = useState(false);

  const { data, metadata, loading, error } = useProveedorPaginate(
    { currentPage, pageSize },
    reload
  );

  const { mutate: remove } = useDeleteProveedor(() => {
    setReload((prev) => !prev);
  });

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
  } = useActionTables<string>(async (id) => {
    await remove({ id });
  });

  return (
    <MainPageTemplate
      titulo1="Proveedores"
      titulo2="Gestioná fácilmente la información de tus proveedores."
      mainContent={
        <>
          {(metadata.totalItems ?? 0) > 1 ? (
            <TableBase
              tabla="Proveedores"
              nameButton="Nuevo proveedor +"
              onclick={handleCreate}
              columnas={proveedorColumns}
              columnRender={ProveedorColumnRender(
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
              totalItems={metadata?.totalItems}
              setPageSize={setPageSize}
            />
          ) : (
            <NoDataTemplate
              icon={<IconPackage className="text-brand-first" size={100} />}
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
            titulo="Eliminar proveedor"
            startText="¿Estás seguro de que quieres eliminar este proveedor? 
            Los productos asociados no se eliminarán y 
            quedarán como "
            endText="Sin proveedor."
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
