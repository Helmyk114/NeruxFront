import { PlantillaGenerica } from "../../../components/ui/template";
import { TextoInicio } from "../../../components/ui/atomos";
import OlvidarContraseñaForm from "../../../components/ui/organismo/forms/NewPassword/NewPassword";
import { AuthService } from "../../../../infrastructure/services/AuthService";
import { NewPasswordUseCase } from "../../../../domain/usecases/NewPasswordUseCase";

export function RestablecerContraseña(): JSX.Element {
  const authService = new AuthService();
  const newPasswordUseCase = new NewPasswordUseCase(authService);

  return (
    <PlantillaGenerica
      texto={
        <TextoInicio
          spans={[
            {
              texto: "¡TU CONTRASEÑA!\n ANTERIOR HA SIDO\n RESTABLECIDA!\n",
              className: "font-bold text-3xl lg:text-4xl",
            },

            {
              texto:
                "Por favor, establece una nueva\n contraseña para tu cuenta.",
              className: "italic 2xl lg:text-2xl",
            },
          ]}
          className="py-2 font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
        />
      }
      formulario={<OlvidarContraseñaForm newPasswordUseCase={newPasswordUseCase} />}
    />
  );
}
