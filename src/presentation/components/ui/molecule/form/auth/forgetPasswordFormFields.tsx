import { IconUser } from "@tabler/icons-react";
import { InputAtom } from "../../../atom/form/input";
import { Field } from "formik";

export function OlvideContraseñaFormFields(): JSX.Element {
  return (
    <div>
      <Field
        nombre="email"
        label="Correo electrónico"
        component={InputAtom}
        isRequired
        icono={
          <IconUser className="text-2xl text-default-400 pointer-events-none" />
        }
        className="w-3/5 mx-auto"
      />
    </div>
  );
}
