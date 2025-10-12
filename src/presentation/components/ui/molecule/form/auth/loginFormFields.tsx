import { Field } from "formik";
import { InputAtom, InputPassword } from "../../../atom/form/input";
import { IconUser } from "@tabler/icons-react";
import { LinkAtom } from "../../../atom/navigation";

export function LoginFormFields(): JSX.Element {
  return (
    <>
      <div>
        <Field
          nombre="username"
          label="Usuario"
          component={InputAtom}
          isRequired
          icono={
            <IconUser className="text-2xl text-default-400 pointer-events-none" />
          }
          className="w-3/5 mx-auto"
        />
      </div>
      <div className="mt-11">
        <Field
          nombre="password"
          label="Contraseña"
          component={InputPassword}
          isRequired
          className="w-3/5 mx-auto"
        />
      </div>
      <div className="w-3/5 mx-auto text-end">
        <LinkAtom
          to="/Olvide/Contraseña"
          texto="¿Olvidaste tu contraseña?"
          className="text-semantic-informacion text-sm mt-2"
        />
      </div>
    </>
  );
}
