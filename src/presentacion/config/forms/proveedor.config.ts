// skipcq: JS-C1003
import * as Yup from "yup";
import { ProveedorForm } from "@/domain";
import { stringValidations } from "@/shared/validations/stringValidations";

interface ProveedorConfig {
  intiatialValues: ProveedorForm;
  validationSchema: Yup.ObjectSchema<ProveedorForm>;
}

export const proveedorConfig: ProveedorConfig = {
  intiatialValues: {
    name: "",
    supplier: "",
    phone: "",
    email: "",
    note: "",
  },
  validationSchema: Yup.object().shape({
    name: stringValidations(Yup.string(), [
      {type: "required", message: "El nombre del proveedor es obligatorio"},
      {type: "maxLength", value: 60},
      {type: "alphanumeric"},
    ]),
    supplier: stringValidations(Yup.string(), [
      {type: "maxLength", value: 60},
      {type: "alphanumeric"},
      {type: "optional"}
    ]),
    phone: stringValidations(Yup.string(), [
      {type: "required", message: "El número de teléfono es obligatorio"},
      {type: "maxLength", value: 15},
      {type: "minLength", value: 7},
      {type: "numeric"},
    ]),
    email: stringValidations(Yup.string(), [
      {type: "maxLength", value: 100},
      {type: "email",},
      {type: "optional"}
    ]),
    note: stringValidations(Yup.string(), [
      {type: "maxLength", value: 300},
      {type: "optional"}
    ])
  }) as Yup.ObjectSchema<ProveedorForm>,
};
