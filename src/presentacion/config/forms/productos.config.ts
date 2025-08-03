// skipcq: JS-C1003
import * as Yup from "yup";
import { ValidationRules } from "@/shared";
import { ProductoCreate } from "@/domain";

interface ProductoConfigProps {
  initialValues: ProductoCreate;
  validationSchema: Yup.ObjectSchema<ProductoCreate>;
}

export const productoConfig: ProductoConfigProps = {
  initialValues: {
    name: "",
    category: 0,
    salePrice: 0,
    supplierPrice: 0,
    stock: 0,
    alert: false,
    minStock: 0,
    unit: 0,
    supplier: 0,
    description: "",
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().concat(ValidationRules.campoRequerido()),
    category: Yup.number()
      .transform((_, val) => (val === "" ? undefined : Number(val)))
      .concat(ValidationRules.campoRequeridoNumber()),
    salePrice: Yup.number().concat(ValidationRules.campoRequeridoNumber()),
    supplierPrice: Yup.number().concat(ValidationRules.campoRequeridoNumber()),
    stock: Yup.number().concat(ValidationRules.campoRequeridoNumber()),
    alert: Yup.boolean(),
    minStock: Yup.number().when("alert", {
      is: true,
      then: (schema) => schema.required().min(1),
      otherwise: (schema) => schema.optional(),
    }),
    unit: Yup.number()
      .transform((_, val) => (val === "" ? undefined : Number(val)))
      .concat(ValidationRules.campoRequeridoNumber()),
    supplier: Yup.number()
      .transform((_, val) => (val === "" ? undefined : Number(val)))
      .concat(ValidationRules.campoRequeridoNumber()),
    description: Yup.string()
      .max(500, "La descripción no puede exceder los 500 caracteres")
      .optional(),
  }) as Yup.ObjectSchema<ProductoCreate>,
};
