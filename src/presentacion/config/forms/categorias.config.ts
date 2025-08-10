// skipcq: JS-C1003
import * as Yup from "yup";
import { CategoryForm } from "@/domain";
import { stringValidations } from "@/shared/validations/stringValidations";

interface CategoriasConfig {
  initialValues: CategoryForm;
  validationSchema: Yup.ObjectSchema<CategoryForm>;
}

export const categoriasConfig: CategoriasConfig = {
  initialValues: {
    name: "",
    description: "",
  },
  validationSchema: Yup.object().shape({
    name: stringValidations(Yup.string(), [
      {type: "required", message: "El nombre de la categoria es obligatorio"},
      {type: "maxLength", value: 60},
      {type: "alphanumeric"}
    ]),
    description: stringValidations(Yup.string(), [
      {type: "required", message: "La descripción es obligatoria"},
      {type: "maxLength", value: 300},
    ]),
  }) as Yup.ObjectSchema<CategoryForm>,
};
