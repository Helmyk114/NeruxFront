import { stringValidations } from "@/common/validation";
import { CreateCategoriaCommand } from "@/presentation/models";
import { object, ObjectSchema, string } from "yup";

interface CategoriasConfig {
  initialValues: CreateCategoriaCommand;
  validationSchema: ObjectSchema<CreateCategoriaCommand>;
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
  }) as ObjectSchema<CreateCategoriaCommand>,
};
