import FondoLogin from "../../../../../images/ContainerBg.webp";
import Logotipo from "../../../../../images/Logotipo.png";
import { Background } from "@/presentacion/components/ui/atomos";
import { SeccionIzquierda, SeccionDerecha } from "@/presentacion/components/ui/organismo";

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
      <div className="relative flex items-center justify-center h-screen">
        <div className="relative w-5/6 h-5/6 overflow-hidden">
          <div className="absolute inset-0 w-1/2 bg-base-homeAlt rounded-l-radius-34 ">
            <SeccionIzquierda fondo={fondo} logotipo={logotipo} texto={texto} />
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 h-full bg-base-homeAlt rounded-r-radius-34 flex justify-center items-center">
            <SeccionDerecha formulario={formulario} />
          </div>
        </div>
      </div>
    </Background>
  );
}
