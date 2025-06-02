import { useRef, useState } from "react";
import PopUpSuccess from "../../../../../shared/utils/popUps/success";
import CardSimple from "../../../../components/ui/atomos/Card/CardSimple";
import { Sidebar } from "../../../../components/ui/organismo";
import {
  CrearProductoForm,
  CrearProductoFormHandles,
} from "../../../../components/ui/organismo/forms/Productos/CrearProductos/CrearProdcutosForm";

import { TemplatePageForm } from "../../../../components/ui/template";
import { TemplatePageTable } from "../../../../components/ui/template/plantillaPages";
import { useNavigate } from "react-router-dom";

export function CrearProductos(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef<CrearProductoFormHandles>(null);
  const navigate = useNavigate();

  return (
    <TemplatePageTable
      titulo1="Agrega un nuevo producto"
      titulo2="Completa los siguientes datos para registrar un nuevo producto en tu inventario."
      sideBar={<Sidebar />}
      mainContent={
        <>
          <TemplatePageForm>
            <CardSimple
              className="bg-background-three m-[13px]"
              children={
                <CrearProductoForm
                  ref={formRef}
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
                formRef.current?.resetForm();
              }}
            />
          </TemplatePageForm>
        </>
      }
    />
  );
}
