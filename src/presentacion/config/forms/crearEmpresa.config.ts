import { BusinessForm } from "@/domain/business/business.entity";
import { stringValidations } from "@/shared/validations/stringValidations";
import { object, ObjectSchema, string } from "yup";


interface CrearEmpresaConfig {
  initialValues: BusinessForm;
  validationSchema: ObjectSchema<BusinessForm>;
}

export const crearEmpresaConfig: CrearEmpresaConfig = {
  initialValues: {
    name: "",
    nit: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
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
  }) as ObjectSchema<BusinessForm>,
};
