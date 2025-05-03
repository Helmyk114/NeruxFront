import CardSimple from "../../../components/ui/atomos/Card/CardSimple";
import { CrearProductoForm } from "../../../components/ui/organismo/forms/Productos/CrearProductos/CrearProdcutosForm";
import Sidebar from "../../../components/ui/organismo/sidebar/sidebar";
import { TemplatePageForm } from "../../../components/ui/template";
import { TemplatePageTable } from "../../../components/ui/template/plantillaPages";

export function CrearProductos(): JSX.Element {
  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      mainContent={
        <>
          <TemplatePageForm
            title1="Agrega un nuevo producto"
            title2="Completa los siguientes datos para registrar un nuevo producto en tu inventario."
          >
            <CardSimple
              className="bg-background-three m-[13px]"
              children={<CrearProductoForm />}
            />
          </TemplatePageForm>
        </>
      }
    />
  );
}
