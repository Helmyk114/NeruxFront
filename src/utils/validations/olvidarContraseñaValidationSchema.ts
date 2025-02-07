import { ValidationRules } from "./ValidationRules";
import * as Yup from 'yup';

export const OlvidarContraseñaValidationSchema = Yup.object().shape({
    newPassword: ValidationRules.campoRequerido("nueva contraseña")
    .concat(ValidationRules.minLength("nueva contraseña", 8))
    .concat(ValidationRules.maxLength("nueva contraseña", 20)),

  confirmPassword: ValidationRules.campoRequerido("confirmar contraseña")
    .oneOf([Yup.ref("newPassword")], "Las contraseñas no coinciden"),
}); 