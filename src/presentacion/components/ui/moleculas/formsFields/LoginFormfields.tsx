import { Field } from "formik";
import { IconUser } from "@tabler/icons-react";
import {
  InputFiled,
  InputPassword,
  LinkAtom,
} from "@/presentacion/components/ui/atomos";

export function LoginFormfields(): JSX.Element {
  return (
    <>
      <div>
        <Field
          nombre="username"
          label="Usuario"
          component={InputFiled}
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
