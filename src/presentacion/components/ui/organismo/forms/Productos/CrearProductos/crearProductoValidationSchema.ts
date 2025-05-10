import * as Yup from "yup";
import { ValidationRules } from "../../../../../../../shared/validations/ValidationRules";
export const crearProductoValidation = Yup.object().shape({
  nameProduct: Yup.string().concat(ValidationRules.campoRequerido()),
  sku: Yup.string().concat(ValidationRules.campoRequerido()),
  totalAmount: Yup.string().concat(ValidationRules.campoRequerido()),
  currentAmount: Yup.string().concat(ValidationRules.campoRequerido()),
  salePrice: Yup.string().concat(ValidationRules.campoRequerido()),
  category: Yup.string().concat(ValidationRules.campoRequerido()),
});
