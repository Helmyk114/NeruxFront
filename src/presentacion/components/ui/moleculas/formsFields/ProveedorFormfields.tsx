import { Field } from "formik";
import {
  InputFiled,
  InputTextArea,
} from "@/presentacion/components/ui/atomos";

export function ProveedorFormFields(): JSX.Element {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <Field
        nombre="name"
        label="Nombre del proveedor"
        component={InputFiled}
        isRequired
      />

      <Field
        nombre="supplier"
        label="Empresa (opcional)"
        component={InputFiled}
        isRequired={false}
      />

      <Field
        nombre="phone"
        label="Teléfono"
        component={InputFiled}
        isRequired
      />

      <Field
        nombre="email"
        label="Correo electrónico (opcional)"
        component={InputFiled}
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
