import * as Yup from "yup";
import { CategoryForm } from "@/domain";
import { ValidationRules } from "@/shared/validations/ValidationRules";

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
    name: Yup.string().concat(ValidationRules.campoRequerido()),
    description: Yup.string().concat(ValidationRules.campoRequerido()),
  }) as Yup.ObjectSchema<CategoryForm>,
};
