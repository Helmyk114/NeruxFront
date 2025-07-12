import { Field } from "formik";
import InputFiled from "../../atomos/form/Input";
import InputPassword from '../../atomos/form/InputPassword';
import { IconUser } from "@tabler/icons-react";

export function LoginFormfields(): JSX.Element {
  return (
    <>
      <div>
        <Field
          nombre="username"
          label="Usuario"
          component={InputFiled}
          isRequired={true}
          icono={<IconUser className="text-2xl text-default-400 pointer-events-none" />}
          className="w-3/5 mx-auto"
        />
      </div>
      <div className="mt-11">
        <Field
          nombre="password"
          label="Contraseña"
          component={InputPassword}
          isRequired={true}
          className="w-3/5 mx-auto"
        />
      </div>
      <div className="w-3/5 mx-auto text-end">
        <a
          href="/Olvide/Contraseña"
          className="font-OpenSans text-semantic-informacion text-sm mt-2"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </>
  );
}
