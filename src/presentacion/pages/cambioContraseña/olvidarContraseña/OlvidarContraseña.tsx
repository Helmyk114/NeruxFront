import { PlantillaGenerica } from "../../../components/ui/template";
import { TextoInicio } from "../../../components/ui/atomos";

export function OlvidarContraseña(): JSX.Element {
  return (
    <PlantillaGenerica
      texto={
        <TextoInicio
          spans={[
            {
              texto: "¡NO TE PREOCUPES\n A TODOS NOS PASA!\n",
              className: "font-bold text-3xl lg:text-4xl",
            },
            {
              texto:
                "Ingresa tu correo electrónico para\n que podamos ayudarte a restablecer\n tu contraseña.",
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
