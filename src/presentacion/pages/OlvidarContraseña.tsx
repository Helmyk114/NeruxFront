import { PlantillaGenerica } from "../components/ui/template/paginaPrincipal/plantillaGenerica";
import { TextoInicio } from "../components/ui/atomos/paginaPrincipal/textoInicio";
import login from "../../images/Login.png";
import FondoLogin from "../../images/FondoLogin.png";

export function OlvidarContraseña(): JSX.Element {
  return (
    <PlantillaGenerica
      fondo={FondoLogin}
      logotipo={login}
      texto={
        <TextoInicio
          spans={[
            {
              texto: "¡NO TE PREOCUPES\n A TODOS NOS PASA!\n",
              className: "font-bold text-3xl lg:text-4xl",
            },
            {
              texto: "Ingresa tu correo electrónico para\n que podamos ayudarte a restablecer\n tu contraseña.",
              className: "italic 2xl lg:text-2xl",
            },
          ]}
          className="py-2 font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
        />
      }
      formulario=" Holi"
    />
  );
}
