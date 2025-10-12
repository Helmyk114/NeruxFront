import { Field } from "formik";
import { InputAtom, InputTextArea } from "../../../atom/form/input";

export function CategoriasFormFields(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <Field
        nombre="name"
        label="Nombre de la categoría"
        component={InputAtom}
        isRequired
        placerholder={"Ej. Bebidas"}
      />

      <Field
        nombre="description"
        label="Descripción"
        component={InputTextArea}
        isRequired
        placeholder={"Describe brevemente tu categoría..."}
        maxLength={300}
      />
    </div>
  );
}
