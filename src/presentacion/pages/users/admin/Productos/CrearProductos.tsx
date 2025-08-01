import { useState } from "react";

import {
  CrearProductoFormComponent,
  Sidebar,
} from "../../../../components/ui/organismo";
import { TemplatePageTable } from "../../../../components/ui/template/plantillaPages";
import { useNavigate } from "react-router-dom";
import { CardSimple, TemplatePageForm } from "@/presentacion/components/ui";
import { PopUpSuccess } from "@/shared";
import { CategoriasFormDrawer } from "../inventario/Categorias/CategoriasFormDrawer";
import { useDisclosure } from "@heroui/react";
import { ProveedorFormDrawer } from "../inventario/Proveedor/ProveedorFormDrawer";

export function CrearProductos(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const categoriaDrawer = useDisclosure();
  const proveedorDrawer = useDisclosure();
  const navigate = useNavigate();

  return (
    <TemplatePageTable
      titulo1="Agrega un nuevo producto"
      titulo2="Completa los siguientes datos para registrar un nuevo producto en tu inventario."
      sideBar={<Sidebar />}
      mainContent={
        <TemplatePageForm>
          <CardSimple className="bg-base-second m-[13px]">
            <CrearProductoFormComponent
              reload={reload}
              createCategoria={categoriaDrawer.onOpen}
              createProveedor={proveedorDrawer.onOpen}
              onSuccess={() => setIsModalOpen(true)}
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
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            titulo="¡Producto creado con éxito!"
            startText="Tu producto ha sido añadido al inventario 
              correctamente. Puedes gestionarlo desde la lista de 
              productos o agregar uno nuevo."
            textButton="Ver productos"
            onClick={() => navigate("/Productos")}
            secondTextButton="Agregar otro"
            onSecondClick={() => {
              setIsModalOpen(false);
            }}
          />
        </TemplatePageForm>
      }
    />
  );
}
