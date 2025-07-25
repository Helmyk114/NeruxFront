import {
  LoginForm,
  PlantillaGenerica,
  RichText,
} from "@/presentacion/components/ui";
import { loginText } from "@/shared/constants/texts/loginTextConfig";

export function Login(): JSX.Element {
  return (
    <PlantillaGenerica
      texto={
        <RichText
          segments={loginText.text()}
          className={loginText.containerClass}
        />
      }
      formulario={<LoginForm />}
    />
  );
}
