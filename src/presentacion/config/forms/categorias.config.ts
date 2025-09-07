import { object, ObjectSchema, string } from "yup";
import { Category, CategoryForm } from "@/domain";
import { stringValidations } from "@/shared/validations/stringValidations";

interface CategoriasConfig {
  initialValues: Partial<Category>;
  validationSchema: ObjectSchema<CategoryForm>;
}

export const categoriasConfig: CategoriasConfig = {
  initialValues: {
    name: "",
    description: "",
  },
  validationSchema: object().shape({
    name: stringValidations(string(), [
      {type: "required", message: "El nombre de la categoria es obligatorio"},
      {type: "maxLength", value: 60},
      {type: "alphanumeric"}
    ]),
    description: stringValidations(string(), [
      {type: "required", message: "La descripción es obligatoria"},
      {type: "maxLength", value: 300},
    ]),
  }) as ObjectSchema<CategoryForm>,
};
