import FondoLogin from "../../../../../images/ContainerBg.webp";
import Logotipo from "../../../../../images/Logotipo.png";
import { Background } from "@/presentacion/components/ui/atomos";
import {
  SeccionIzquierda,
  SeccionDerecha,
} from "@/presentacion/components/ui/organismo";

interface PlantillaProps {
  fondo?: string;
  logotipo?: string;
  texto: React.ReactNode;
  formulario: React.ReactNode;
}
export function PlantillaGenerica({
  fondo = FondoLogin,
  logotipo = Logotipo,
  texto,
  formulario,
}: PlantillaProps): JSX.Element {
  return (
    <Background>
      <div className="flex relative items-center justify-center h-screen">
        <div className="flex flex-row relative w-5/6 h-5/6 overflow-hidden">
          <div className="flex flex-col absolute inset-0 w-1/2 bg-base-home-alt rounded-l-radius-34 ">
            <SeccionIzquierda fondo={fondo} logotipo={logotipo} texto={texto} />
          </div>
          <div className="flex absolute inset-y-0 right-0 w-1/2 h-full bg-base-home-alt rounded-r-radius-34">
            <SeccionDerecha formulario={formulario} />
          </div>
        </div>
      </div>
    </Background>
  );
}
