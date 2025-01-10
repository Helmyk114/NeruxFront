import * as Yup from "yup";
import { ValidationRules } from "./ValidationRules";

export const loginValidationSchema = Yup.object({
  username: ValidationRules.campoRequerido("usuario").concat(
    ValidationRules.minLength("usuario", 5).concat(
      ValidationRules.maxLength("usuario", 10)
    )
  ),
  password: ValidationRules.campoRequerido("contraseña")
});
