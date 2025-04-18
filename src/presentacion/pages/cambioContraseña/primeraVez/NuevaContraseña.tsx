import { PlantillaGenerica } from "../../../components/ui/template";
import { TextoInicio } from "../../../components/ui/atomos";
import NewPasswordForm from "../../../components/ui/organismo/forms/NewPassword/NewPassword";

export function NuevaContraseña(): JSX.Element {
  return (
    <PlantillaGenerica
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
          className={ "font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"}
        />
      }
      formulario={<NewPasswordForm />}
    />
  );
}
