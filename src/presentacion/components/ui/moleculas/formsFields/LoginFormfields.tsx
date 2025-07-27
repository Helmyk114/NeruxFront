import { Field } from "formik";
import { IconUser } from "@tabler/icons-react";
import { InputFiled, InputPassword } from "@/presentacion/components/ui/atomos";
import { Link } from "react-router-dom";

export function LoginFormfields(): JSX.Element {
  return (
    <>
      <div>
        <Field
          nombre="username"
          label="Usuario"
          component={InputFiled}
          isRequired
          icono={<IconUser className="text-2xl text-default-400 pointer-events-none" />}
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
        <Link
          to="/Olvide/Contraseña"
          className="font-OpenSans text-semantic-informacion text-sm mt-2"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </>
  );
}
