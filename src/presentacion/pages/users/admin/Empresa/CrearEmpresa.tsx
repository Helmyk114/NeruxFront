import { Title2 } from "../../../../components/ui/atomos";
import { Acordion } from "../../../../components/ui/atomos/Acordion";
import { Sidebar } from "../../../../components/ui/organismo";
import CrearEmpresaForm from "../../../../components/ui/organismo/forms/Business/CrearEmpresa/CrearEmpresa.From";
import { CrearProductoForm } from "../../../../components/ui/organismo/forms/Productos/CrearProductos/CrearProdcutosForm";

import { TemplatePageForm } from "../../../../components/ui/template";
import { TemplatePageTable } from "../../../../components/ui/template/plantillaPages";

const accordionItems = [
  {
    key: "1",
    ariaLabel: "Sección 1",
    title: (
      <Title2
        titulo="Paso 1: Configura tu empresa"
        color={"text-texts-level1"}
      />
    ),
    content: <CrearEmpresaForm />,
  },
  {
    key: "2",
    ariaLabel: "Sección 2",
    title: (
      <Title2
        titulo="Paso 2: Personaliza tu empresa ¡Proximamente"
        color={"text-texts-level1"}
      />
    ),
    content: <CrearProductoForm />,
    isDisabled: true,
  },
];

export function CrearEmpresa(): JSX.Element {
  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      mainContent={
        <>
          <TemplatePageForm
            title1="¡Bienvenido a NERUX!"
            title2="Antes de comenzar, configuraremos los datos de tu empresa para que todo funcione a la perfección.
            Completa la siguiente información y estarás listo para gestionar tu inventario."
          >
            <Acordion
              items={accordionItems}
              defaultSelectedKeys={new Set(["1"])}
            />
          </TemplatePageForm>
        </>
      }
    />
  );
}
