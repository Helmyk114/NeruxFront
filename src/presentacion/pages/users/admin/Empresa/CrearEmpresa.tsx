import { Title2, Acordion } from "@/presentacion/components/ui/atomos";
import {
  CrearEmpresaForm,
  Sidebar,
  CrearProductoFormComponent,
} from "@/presentacion/components/ui/organismo";
import {
  TemplatePageForm,
  TemplatePageTable,
} from "@/presentacion/components/ui/template";

const accordionItems = [
  {
    key: "1",
    ariaLabel: "Sección 1",
    title: (
      <Title2
        titulo="Paso 1: Configura tu empresa"
        color={"text-typography-first"}
      />
    ),
    content: <CrearEmpresaForm />,
  },
  {
    key: "2",
    ariaLabel: "Sección 2",
    title: (
      <Title2
        titulo="Paso 2: Personaliza tu empresa ¡Proximamente!"
        color={"text-typography-first"}
      />
    ),
    content: <CrearProductoFormComponent />,
    isDisabled: true,
  },
];

export function CrearEmpresa(): JSX.Element {
  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      titulo1="¡Bienvenido a NERUX!"
      titulo2="Antes de comenzar, configuraremos los datos de tu empresa para que todo funcione a la perfección.
      Completa la siguiente información y estarás listo para gestionar tu inventario."
      mainContent={
        <TemplatePageForm>
          <Acordion
            items={accordionItems}
            defaultSelectedKeys={new Set(["1"])}
          />
        </TemplatePageForm>
      }
    />
  );
}
