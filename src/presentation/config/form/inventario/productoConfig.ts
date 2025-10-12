import { stringValidations } from "@/common/validation";
import { CreateProductoCommand } from "@/presentation/models";
import { boolean, number, object, ObjectSchema, string } from "yup";

interface ProductoConfigProps {
  initialValues: CreateProductoCommand;
  validationSchema: ObjectSchema<CreateProductoCommand>;
}

export const productoConfig: ProductoConfigProps = {
  initialValues: {
    name: "",
    sku: "",
    categoria: "",
    salePrice: "",
    alerta: false,
    minStock: 0,
    proveedor: "",
    description: "",
  },

  validationSchema: object().shape({
    name: stringValidations(string(), [{ type: "required" }]),
    sku: stringValidations(string(), [
      { type: "maxLength", value: 20 },
      { type: "optional" },
    ]),
    categoria: stringValidations(string(), [{ type: "required" }]),
    salePrice: stringValidations(string(), [{ type: "required" }]),
    alerta: boolean(),
    minStock: number().when("alert", {
      is: true,
      then: (schema) => schema.required().min(1),
      otherwise: (schema) => schema.optional(),
    }),
    proveedor: stringValidations(string(), [{ type: "required" }]),
    description: stringValidations(string(), [
      { type: "maxLength", value: 500 },
      { type: "optional" },
    ]),
  }) as ObjectSchema<CreateProductoCommand>,
};
