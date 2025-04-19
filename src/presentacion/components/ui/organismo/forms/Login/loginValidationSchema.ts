import * as Yup from "yup";
import { ValidationRules } from "../../../../../../shared/validations/ValidationRules";

export const loginValidationSchema = Yup.object().shape({
  username: ValidationRules.campoRequerido({
    campo: "El usuario",
  }),
  password: ValidationRules.campoRequerido({
    campo: "La contraseña",
  }),
});
