import { Background } from "../atom/layout";
import FondoLogin from "../../../../images/ContainerBg.webp";
import Logotipo from "../../../../images/Logotipo.png";
import { Logo } from "../atom/media";

interface AuthTemplateProps {
  fondo?: string;
  logotipo?: string;
  texto: React.ReactNode;
  formulario: React.ReactNode;
}
export function AuthTemplate({
  fondo = FondoLogin,
  logotipo = Logotipo,
  texto,
  formulario,
}: AuthTemplateProps): JSX.Element {
  return (
    <Background>
      <div className="flex relative items-center justify-center h-screen">
        <div className="flex flex-row relative w-5/6 h-5/6 overflow-hidden">
          {/*Seccion Izquierda*/}
          <div className="flex flex-col absolute inset-0 w-1/2 bg-base-home-alt rounded-l-radius-34 ">
            <Logo
              src={fondo}
              alt="fondo"
              className="w-[97%] h-[94%] absolute inset-4 z-0 rounded-l-[34px]"
            />
            <div className="flex flex-col h-full justify-between relative z-10 ">
              <div className="p-14 ">
                <Logo
                  src={logotipo}
                  alt="logotipo"
                  width="250px"
                  className="md:w-48 lg:w-64 sm:w-48"
                />
              </div>
              <div className="p-14">
                <div className="overflow-visible">{texto}</div>
              </div>
            </div>
          </div>

          {/*Seccion Derecha*/}
          <div className="flex absolute inset-y-0 right-0 w-1/2 h-full bg-base-home-alt rounded-r-radius-34">
            <div className="flex flex-col items-center justify-center w-full">
              {formulario}
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
