import { useState } from "react";
import {
  CardSimple,
  CrearProductoFormComponent,
  TemplatePageForm,
  TemplatePageTable,
} from "@/presentacion/components/ui";
import { Spinner, useDisclosure } from "@heroui/react";
import { useParams } from "react-router-dom";
import { useRedirect } from "@/presentacion/components/hook";

import { CategoriasFormDrawer } from "../Categorias/CategoriasFormDrawer";
import { ProveedorFormDrawer } from "../Proveedor/ProveedorFormDrawer";
import { PopUpSuccess } from "@/shared/utils/popUps/success";
import { useProductoById } from "@/application/hooks";

export function CrearProductos(): JSX.Element {
  const { idProduct } = useParams<{ idProduct?: string }>();
  const isEditing = Boolean(idProduct);
  const [reload, setReload] = useState(false);
  const categoriaDrawer = useDisclosure();
  const proveedorDrawer = useDisclosure();
  const popUp = useDisclosure();
  const redirect = useRedirect();

  const {
    data: product,
    loading,
    error,
  } = useProductoById(idProduct ?? null, isEditing);

  const isLoading = isEditing && loading;
  const hasError = isEditing && error;

  return (
    <TemplatePageTable
      titulo1={isEditing ? "Editar producto" : "Agrega un nuevo producto"}
      titulo2={
        isEditing
          ? "Modifica la información del producto según sea necesario."
          : "Completa los siguientes datos para registrar un nuevo producto en tu inventario."
      }
      mainContent={
        isLoading ? (
          <div>
            <Spinner title="Cargando..." />
          </div>
        ) : hasError ? (
          <div>Error: {"No se encontró el producto"}</div>
        ) : (
          <TemplatePageForm>
            <CardSimple className="bg-base-second m-[13px]">
              <CrearProductoFormComponent
                reload={reload}
                isEditing={isEditing}
                idProduct={idProduct}
                data={product}
                createCategoria={categoriaDrawer.onOpen}
                createProveedor={proveedorDrawer.onOpen}
                onSuccess={popUp.onOpen}
              />
            </CardSimple>

            <CategoriasFormDrawer
              isOpen={categoriaDrawer.isOpen}
              onClose={categoriaDrawer.onOpenChange}
              onSuccess={() => setReload((prev) => !prev)}
              id={null}
              mode={"crear"}
            />

            <ProveedorFormDrawer
              isOpen={proveedorDrawer.isOpen}
              onClose={proveedorDrawer.onOpenChange}
              onSuccess={() => setReload((prev) => !prev)}
              id={null}
              mode={"crear"}
            />

            <PopUpSuccess
              isOpen={popUp.isOpen}
              onClose={popUp.onClose}
              titulo="¡Producto creado con éxito!"
              startText="Tu producto ha sido añadido al inventario 
              correctamente. Puedes gestionarlo desde la lista de 
              productos o agregar uno nuevo."
              textButton="Ver productos"
              onClick={() => redirect("/Productos")}
              secondTextButton="Agregar otro"
              onSecondClick={popUp.onClose}
            />
          </TemplatePageForm>
        )
      }
    />
  );
}
