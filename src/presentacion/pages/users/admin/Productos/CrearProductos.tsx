import { useState } from "react";

import {
  CrearProductoFormComponent,
  Sidebar,
} from "../../../../components/ui/organismo";
import { TemplatePageTable } from "../../../../components/ui/template/plantillaPages";
import { useNavigate } from "react-router-dom";
import { CardSimple, TemplatePageForm } from "@/presentacion/components/ui";
import { PopUpSuccess } from "@/shared";

export function CrearProductos(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <TemplatePageTable
      titulo1="Agrega un nuevo producto"
      titulo2="Completa los datos para registrar un nuevo producto en tu inventario."
      sideBar={<Sidebar />}
      mainContent={
        <>
          <TemplatePageForm>
            <CardSimple
              className="bg-background-three m-[13px]"
              children={
                <CrearProductoFormComponent
                  onSuccess={() => setIsModalOpen(true)}
                />
              }
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
        </>
      }
    />
  );
}
