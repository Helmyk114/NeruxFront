import { PlantillaGenerica } from "../components/ui/template";
import { TextoInicio } from "../components/ui/atomos";
import LoginForm from "../components/ui/organismo/forms/Login/LoginForm";
import { loginTextConfig } from "../../shared/constants/texts/loginTextConfig";

export default function Login(): JSX.Element {

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
      formulario={<LoginForm />}
    />
  );
}
