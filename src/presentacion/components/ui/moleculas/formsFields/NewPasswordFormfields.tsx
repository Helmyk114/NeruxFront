import { Field } from "formik";
import { InputPassword } from "../../atomos";

export function NewPasswordFromfield(): JSX.Element {
  return (
    <>
      <Field
        nombre="newPassword"
        label="Nueva contraseña"
        component={InputPassword}
        className="w-9/12 mx-auto"
        showError={false}
        isRequired
      />
      <Field
        nombre="confirmPassword"
        label="Repetir contraseña"
        component={InputPassword}
        className="w-9/12 mx-auto"
        showError={false}
        isRequired
      />
    </>
  );
}
