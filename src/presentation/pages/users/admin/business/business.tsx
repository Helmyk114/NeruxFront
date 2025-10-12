import { AcordionAtom } from "@/presentation/components/ui/atom/layout";
import { Title2 } from "@/presentation/components/ui/atom/typography";
import { EmpresaForm } from "@/presentation/components/ui/organism/form";
import {
  CardTemplate,
  MainPageTemplate,
} from "@/presentation/components/ui/template";

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
    content: <EmpresaForm />,
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
    content: "",
    isDisabled: true,
  },
];

export function CrearEmpresa(): JSX.Element {
  return (
    <MainPageTemplate
      titulo1="¡Bienvenido a NERUX!"
      titulo2="Antes de comenzar, configuraremos los datos de tu empresa para que todo funcione a la perfección.
      Completa la siguiente información y estarás listo para gestionar tu inventario."
      mainContent={
        <CardTemplate>
          <AcordionAtom
            items={accordionItems}
            defaultSelectedKeys={new Set(["1"])}
          />
        </CardTemplate>
      }
    />
  );
}
