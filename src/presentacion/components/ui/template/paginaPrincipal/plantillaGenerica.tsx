import React from "react";
import { Background } from "../../atomos";
import { SeccionDerecha, SeccionIzquierda } from "../../organismo";

interface PlantillaProps {
  fondo: string;
  logotipo: string;
  texto: React.ReactNode;
  formulario: React.ReactNode;
}
export function PlantillaGenerica({
  fondo,
  logotipo,
  texto,
  formulario,
}: PlantillaProps): JSX.Element {
  return (
    <Background>
      <div className="relative flex items-center justify-center h-screen">
        <div className="relative w-5/6 h-5/6 overflow-hidden">
          <div className="absolute inset-0 w-1/2  bg-background2 rounded-l-radius-34 ">
            <SeccionIzquierda fondo={fondo} logotipo={logotipo} texto={texto} />
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 h-full bg-background2 rounded-r-radius-34">
            <SeccionDerecha formulario={formulario} />
          </div>
        </div>
      </div>
    </Background>
  );
};
