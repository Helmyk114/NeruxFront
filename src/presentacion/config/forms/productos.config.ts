import { boolean, number, object, ObjectSchema, string } from "yup";

import { CreateProductoCommand } from "@/application/UseCase/Inventario/productos/CreateProdcuto";
import { stringValidations } from "@/shared/validations/stringValidations";

interface ProductoConfigProps {
  initialValues: CreateProductoCommand;
  validationSchema: ObjectSchema<CreateProductoCommand>;
}

export const productoConfig: ProductoConfigProps = {
  initialValues: {
    name: "",
    sku: "",
    category: "",
    salePrice: "",
    alert: false,
    minStock: 0,
    supplier: "",
    description: "",
  },

  validationSchema: object().shape({
    name: stringValidations(string(), [{ type: "required" }]),
    sku: stringValidations(string(), [
      { type: "maxLength", value: 20 },
      { type: "optional" },
    ]),
    category: stringValidations(string(), [{ type: "required" }]),
    salePrice: stringValidations(string(), [{ type: "required" }]),
    alert: boolean(),
    minStock: number().when("alert", {
      is: true,
      then: (schema) => schema.required().min(1),
      otherwise: (schema) => schema.optional(),
    }),
    supplier: stringValidations(string(), [{ type: "required" }]),
    description: stringValidations(string(), [
      { type: "maxLength", value: 500 },
      { type: "optional" },
    ]),
  }) as ObjectSchema<CreateProductoCommand>,
};
