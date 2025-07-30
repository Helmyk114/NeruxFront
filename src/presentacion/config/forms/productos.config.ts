  // skipcq: JS-C1003
  import * as Yup from "yup";
  import { ValidationRules } from "@/shared";

  export type ProductosValues = {
    nameProduct: string;
    category: number;
    salePrice: number;
    supplierPrice: number;
    stock: number;
    alert: boolean;
    minStock: number;
    unit: number;
    supplier: number;
    description: string;
  };

  interface ProductoConfigProps {
    initialValues: ProductosValues;
    validationSchema: Yup.ObjectSchema<Partial<ProductosValues>>;
  }

  export const productoConfig: ProductoConfigProps = {
    initialValues: {
      nameProduct: "",
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
      nameProduct: Yup.string().concat(ValidationRules.campoRequerido()),
      category: Yup.number().concat(ValidationRules.campoRequeridoNumber()),
      salePrice: Yup.number().concat(ValidationRules.campoRequeridoNumber()),
      supplierPrice: Yup.number().concat(ValidationRules.campoRequeridoNumber()),
      stock: Yup.number().concat(ValidationRules.campoRequeridoNumber()),
      alert: Yup.boolean(),
      minStock: Yup.number().when("alert", {
        is: true,
        then: (schema) => schema.required().min(1),
        otherwise: (schema) => schema.optional(),
      }),
      unit: Yup.number().required().min(1),
      supplier: Yup.number().concat(ValidationRules.campoRequeridoNumber()),
      description: Yup.string().max(500, "La descripción no puede exceder los 500 caracteres").optional(),
    }) as Yup.ObjectSchema<Partial<ProductosValues>>,
  };
