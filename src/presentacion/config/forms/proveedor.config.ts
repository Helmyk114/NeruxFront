import { object, ObjectSchema, string } from "yup";
import { stringValidations } from "@/shared";
import { Proveedor } from "@/domain/interface";


interface ProveedorConfig {
  initialValues: Proveedor;
  validationSchema: ObjectSchema<Proveedor>;
}

export const proveedorConfig: ProveedorConfig = {
  initialValues: {
    name: "",
    supplier: "",
    phone: "",
    email: "",
    note: "",
  },
  validationSchema: object().shape({
    name: stringValidations(string(), [
      { type: "required", message: "El nombre del proveedor es obligatorio" },
      { type: "maxLength", value: 60 },
      { type: "alphanumeric" },
    ]),
    supplier: stringValidations(string(), [
      { type: "maxLength", value: 60 },
      { type: "alphanumeric" },
      { type: "optional" },
    ]),
    phone: stringValidations(string(), [
      { type: "required", message: "El número de teléfono es obligatorio" },
      { type: "maxLength", value: 15 },
      { type: "minLength", value: 7 },
      { type: "numeric" },
    ]),
    email: stringValidations(string(), [
      { type: "maxLength", value: 100 },
      { type: "email" },
      { type: "optional" },
    ]),
    note: stringValidations(string(), [
      { type: "maxLength", value: 300 },
      { type: "optional" },
    ]),
  }) as ObjectSchema<Proveedor>,
};
