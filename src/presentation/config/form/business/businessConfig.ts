import { stringValidations } from "@/common/validation";
import { CreateBusinessCommand } from "@/presentation/models";
import { object, ObjectSchema, string } from "yup";

interface CrearEmpresaConfig {
  initialValues: CreateBusinessCommand;
  validationSchema: ObjectSchema<CreateBusinessCommand>;
}

export const crearEmpresaConfig: CrearEmpresaConfig = {
  initialValues: {
    name: "",
    nit: "",
    email: "",
    phone: "",
    address: "",
  },

  validationSchema: object().shape({
    name: stringValidations(string(), [
      { type: "required" },
      { type: "minLength", value: 3 },
    ]),

    nit: stringValidations(string(), [
      { type: "required" },
      { type: "maxLength", value: 12 },
    ]),
    phone: stringValidations(string(), [
      { type: "required" },
      { type: "maxLength", value: 10 },
    ]),
    address: stringValidations(string(), [
      { type: "required" },
      { type: "maxLength", value: 100 },
    ]),
    email: stringValidations(string(), [
      { type: "required" },
      { type: "email" },
      { type: "maxLength", value: 50 },
    ]),
  }) as ObjectSchema<CreateBusinessCommand>,
};
