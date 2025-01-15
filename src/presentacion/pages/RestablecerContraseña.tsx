
import { PlantillaGenerica } from "../components/ui/template";
import { TextoInicio } from "../components/ui/atomos";
import login from "../../images/Login.png";
import ContainerBg from "../../images/ContainerBg.webp";

export function RestablecerContraseña():JSX.Element {
  return (
    <PlantillaGenerica
    fondo={ContainerBg}
    logotipo={login}
    texto={
      <TextoInicio
        spans={[
          {
            texto: "¡TU CONTRASEÑA!\n ANTERIOR HA SIDO\n RESTABLECIDA!\n",
            className: "font-bold text-3xl lg:text-4xl",
          },

          {
            texto: "Por favor, establece una nueva\n contraseña para tu cuenta.",
            className: "italic 2xl lg:text-2xl",
          },
        ]}
        className="py-2 font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
      />
    }
    formulario=" Holi"
  />
  );
};
