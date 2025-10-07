import { object, ObjectSchema, string } from "yup";
import { stringValidations } from "@/shared";
import { Categoria } from "@/Domain/interface";

interface CategoriasConfig {
  initialValues: Categoria;
  validationSchema: ObjectSchema<Categoria>;
}

export const categoriasConfig: CategoriasConfig = {
  initialValues: {
    name: "",
    description: "",
  },
  validationSchema: object().shape({
    name: stringValidations(string(), [
      { type: "required", message: "El nombre de la categoria es obligatorio" },
      { type: "maxLength", value: 60 },
      { type: "alphanumeric" },
    ]),
    description: stringValidations(string(), [
      { type: "required", message: "La descripción es obligatoria" },
      { type: "maxLength", value: 300 },
    ]),
  }) as ObjectSchema<Categoria>,
};
