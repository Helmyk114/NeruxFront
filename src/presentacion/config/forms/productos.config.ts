import { boolean, number, object, ObjectSchema, string } from "yup";
import { stringValidations, ValidationRules } from "@/shared";
import { ProductoCreate } from "@/domain";

interface ProductoConfigProps {
  initialValues: Partial<ProductoCreate>;
  validationSchema: ObjectSchema<Partial<ProductoCreate>>;
}

export const productoConfig: ProductoConfigProps = {
  initialValues: {
    name: "",
    sku: "",
    category: 0,
    salePrice: 0,
    alert: false,
    minStock: 0,
    unit: 0,
    supplier: 0,
    description: "",
  },

  validationSchema: object().shape({
    name: stringValidations(string(), [{ type: "required" }]),
    sku: stringValidations(string(), [
      { type: "maxLength", value: 20 },
      { type: "optional" },
    ]),
    category: number()
      .transform((_, val) => (val === "" ? undefined : Number(val)))
      .concat(ValidationRules.campoRequeridoNumber()),
    salePrice: number().concat(ValidationRules.campoRequeridoNumber()),
    alert: boolean(),
    minStock: number().when("alert", {
      is: true,
      then: (schema) => schema.required().min(1),
      otherwise: (schema) => schema.optional(),
    }),
    supplier: number()
      .transform((_, val) => (val === "" ? undefined : Number(val)))
      .concat(ValidationRules.campoRequeridoNumber()),
    description: stringValidations(string(), [
      { type: "maxLength", value: 500 },
      { type: "optional" },
    ]),
  }) as ObjectSchema<ProductoCreate>,
};
