import { PlantillaGenerica } from "../components/ui/template";
import { TextoInicio } from "../components/ui/atomos";
import LoginForm from "../components/ui/organismo/forms/Login";
import login from "../../images/Login.png";
import ContainerBg from "../../images/ContainerBg.webp";

export default function Login(): JSX.Element {
  return (
    <PlantillaGenerica
      texto={
        <TextoInicio
          spans={[
            {
              texto: "BIENVENID@\n",
              className: "font-bold text-3xl lg:text-5xl",
            },
            {
              texto: "¡Empieza tu viaje con\n nuestro ",
              className: "italic font-light text-2xl lg:text-4xl",
            },
            {
              texto: "sistema de\n gestión!",
              className: "font-semibold 4xl lg:text-4xl",
            },
          ]}
          className="py-2 font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
        />
      }
      formulario={<LoginForm />}
    />
  );
}