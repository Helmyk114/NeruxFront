import { Field } from "formik";
import { InputAtom } from "../../../atom/form/input";

export function EmpresaFormFields(): JSX.Element {
  return (
    <>
      <div className="flex flex-row gap-12">
        <Field
          nombre="name"
          label="Nombre de la empresa"
          component={InputAtom}
          isRequired
          maxLength={50}
          minLength={3}
        />
        <Field
          nombre="nit"
          label="NIT o identificación fiscal"
          component={InputAtom}
          isRequired
          maxLength={12}
        />
      </div>
      <div className="flex flex-row gap-12">
        <Field
          nombre="phone"
          label="Télefono de contacto"
          component={InputAtom}
          isRequired
          maxLength={10}
        />
        <Field
          nombre="address"
          label="Dirección principal"
          component={InputAtom}
          isRequired
          maxLength={100}
        />
      </div>
      <div className="flex flex-row gap-12">
        <Field
          nombre="email"
          label="Correo electrónico de la empresa"
          component={InputAtom}
          isRequired
          maxLength={50}
        />
      </div>
    </>
  );
}
