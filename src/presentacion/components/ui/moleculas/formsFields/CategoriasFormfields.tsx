import { Field } from "formik";
import InputFiled from "../../atomos/form/Input";
import InputTextArea from "../../atomos/form/InputArea";

export function CategoriasFormFields(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 mt-10">
      <Field
        nombre="name"
        label="Nombre de la categoría"
        component={InputFiled}
        isRequired={true}
        placerholder={"Ej. Bebidas"}
      />

      <Field
        nombre="description"
        label="Descripción"
        component={InputTextArea}
        isRequired={true}
        placeholder={"Describe brevemente tu categoría..."}
        maxLength={250}
      />
    </div>
  );
}
