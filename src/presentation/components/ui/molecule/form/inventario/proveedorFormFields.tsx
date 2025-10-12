import { Field } from "formik";
import { InputAtom, InputTextArea } from "../../../atom/form/input";

export function ProveedorFormFields(): JSX.Element {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <Field
        nombre="name"
        label="Nombre del proveedor"
        component={InputAtom}
        isRequired
      />

      <Field
        nombre="supplier"
        label="Empresa (opcional)"
        component={InputAtom}
        isRequired={false}
      />

      <Field nombre="phone" label="Teléfono" component={InputAtom} isRequired />

      <Field
        nombre="email"
        label="Correo electrónico (opcional)"
        component={InputAtom}
        isRequired={false}
      />

      <Field
        nombre="note"
        label="Notas (opcional)"
        component={InputTextArea}
        isRequired={false}
        maxLength={500}
      />
    </div>
  );
}
