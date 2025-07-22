import { Field } from "formik";
import { InputFiled, InputTextArea } from "@/presentacion/components/ui/atomos";

export function CategoriasFormFields(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <Field
        nombre="name"
        label="Nombre de la categoría"
        component={InputFiled}
        isRequired
        placerholder={"Ej. Bebidas"}
      />

      <Field
        nombre="description"
        label="Descripción"
        component={InputTextArea}
        isRequired
        placeholder={"Describe brevemente tu categoría..."}
        maxLength={250}
      />
    </div>
  );
}
