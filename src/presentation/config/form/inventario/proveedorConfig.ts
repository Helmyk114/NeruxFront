import { stringValidations } from "@/common/validation";
import { CreateProveedorCommand } from "@/presentation/models";
import { object, ObjectSchema, string } from "yup";

interface ProveedorConfig {
  initialValues: CreateProveedorCommand;
  validationSchema: ObjectSchema<CreateProveedorCommand>;
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
  }) as ObjectSchema<CreateProveedorCommand>,
};
