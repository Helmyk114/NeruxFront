import { PlantillaGenerica } from "../components/ui/template";
import { TextoInicio } from "../components/ui/atomos";
import LoginForm from "../components/ui/organismo/forms/Login/LoginForm";
import { loginTextConfig } from "../../shared/constants/texts/loginTextConfig";
import { LoginUseCase } from "../../domain/usecases/LoginUseCase";
import { AuthService } from "../../infrastructure/services/auth/Auth.service";

export default function Login(): JSX.Element {
  const authService = new AuthService();
  const loginUseCase = new LoginUseCase(authService);

  return (
    <PlantillaGenerica
      texto={
        <TextoInicio
          spans={[
            {
              texto: loginTextConfig.welcomeText.text,
              className: loginTextConfig.welcomeText.className,
            },
            {
              texto: loginTextConfig.startText.text,
              className: loginTextConfig.startText.className,
            },
            {
              texto: loginTextConfig.systemText.text,
              className: loginTextConfig.systemText.className,
            },
          ]}
          className={loginTextConfig.containerClass}
        />
      }
      formulario={<LoginForm loginUseCase={loginUseCase} />}
    />
  );
}
