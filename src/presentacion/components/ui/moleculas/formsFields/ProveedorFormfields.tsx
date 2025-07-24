import { Field } from "formik";
import {
  InputFiled,
  InputNumber,
  InputTextArea,
} from "@/presentacion/components/ui/atomos";

export function ProveedorFormFields(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <Field
        nombre="name"
        label="Nombre del proveedor"
        component={InputFiled}
        isRequired
        placeholder={"Chechillow"}
      />

      <Field
        nombre="supplier"
        label="Empresa (opcional)"
        component={InputFiled}
        isRequired={false}
        placeholder={"Chechillo factory"}
      />

      <Field
        nombre="phone"
        label="Teléfono"
        component={InputNumber}
        isRequired
        placeholder={"3214567889"}
      />

      <Field
        nombre="email"
        label="Correo electrónico (opcional)"
        component={InputFiled}
        isRequired={false}
        placeholder={"ejemplo@gmail.com"}
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
