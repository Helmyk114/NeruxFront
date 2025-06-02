import * as Yup from "yup";
import { ValidationRules } from "../../../../../../../shared/validations/ValidationRules";

export type CrearProductosValues = {
  nameProduct: string;
  sku: string;
  totalAmount: string;
  currentAmount: string;
  productionPrice: string;
  salePrice: string;
  category: number;
  image: string;
};

interface CreateProductConfig {
  initialValues: CrearProductosValues;
  validationSchema: Yup.ObjectSchema<Partial<CrearProductosValues>>;
}

export const createProductConfig: CreateProductConfig = {
  initialValues: {
    nameProduct: "",
    sku: "",
    totalAmount: "",
    currentAmount: "",
    productionPrice: "",
    salePrice: "",
    category: 0,
    image: "",
  },
  
  validationSchema: Yup.object().shape({
    nameProduct: Yup.string().concat(ValidationRules.campoRequerido()),
    sku: Yup.string().concat(ValidationRules.campoRequerido()),
    totalAmount: Yup.string().concat(ValidationRules.campoRequerido()),
    currentAmount: Yup.string().concat(ValidationRules.campoRequerido()),
    productionPrice: Yup.string().optional(),
    salePrice: Yup.string().concat(ValidationRules.campoRequerido()),
    category: Yup.number().required(),
    image: Yup.string().optional(),
  }) as Yup.ObjectSchema<Partial<CrearProductosValues>>,
};
