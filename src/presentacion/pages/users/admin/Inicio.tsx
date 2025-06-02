import { Sidebar } from "../../../components/ui/organismo";
import { TemplatePageTable } from "../../../components/ui/template/plantillaPages";

export function Inicio(): JSX.Element {

  return (
    <TemplatePageTable
      sideBar={<Sidebar />}
      mainContent={
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold dark:text-semantic-error">
            Bienvenido a la página de inicio
          </h1>
          <p className="mt-4 text-lg">
            Esta es la página de inicio de tu aplicación.
          </p>
       
        </div>
      }
    />
  );
}
