import { PlantillaGenerica } from "../components/ui/template";
import { TextoInicio } from "../components/ui/atomos";
import login from "../../images/Login.png";
import ContainerBg from "../../images/ContainerBg.webp";

export function NuevaContraseña(): JSX.Element {
  return (
    <PlantillaGenerica
    fondo={ContainerBg}
    logotipo={login}
    texto={
      <TextoInicio
        spans={[
          {
            texto: "¡VAMOS A CREAR TU\n NUEVA CONTRASEÑA!\n",
            className: "font-bold text-3xl lg:text-4xl",
          },
          {
            texto: "Solo queda un paso más para\n completar el proceso.",
            className: "italic 2xl lg:text-2xl",
          },
        ]}
      />
    }
    formulario=" Holi"
  />
  );
};
