import { CrearProductoForm } from "../../../components/ui/organismo/forms/Productos/CrearProductos/CrearProdcutosForm";
import Sidebar from "../../../components/ui/organismo/sidebar/sidebar";
import { TemplatePageForm } from "../../../components/ui/template";
import { TemplatePageTable } from "../../../components/ui/template/plantillaPages";



export function CrearProductos (): JSX.Element {

  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      mainContent={
        <>

          <TemplatePageForm form={<CrearProductoForm />}/>
        </>
      }
    />
  );
};

