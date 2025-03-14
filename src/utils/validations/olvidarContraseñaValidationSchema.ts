import { ValidationRules } from "./ValidationRules";
import * as Yup from 'yup';

export const OlvidarContraseñaValidationSchema = Yup.object().shape({
    newPassword: ValidationRules.campoRequerido("nueva contraseña")
    .min(8, "La contraseña debe tener al menos 8 caracteres") 
    .matches(
      /[A-Z]/, 
      "La contraseña debe contener al menos una letra mayúscula"
    )
    .matches(
      /[0-9]/, 
      "La contraseña debe contener al menos un número"
    )
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/, 
      "La contraseña debe contener al menos un carácter especial"
    )
    .test(
      "password-requirements",
      "La contraseña no cumple con los requisitos",
      function (value) {
        const errors = [];
        if (!/[A-Z]/.test(value)) {
          errors.push("Al menos una letra mayúscula.");
        }
        if (!/[0-9]/.test(value)) {
          errors.push("Al menos un número.");
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
          errors.push("Al menos un carácter especial.");
        }
        if (value.length < 8) {
          errors.push("Mínimo de 8 caracteres.");
        }
        return errors.length === 0 ? true : this.createError({ message: errors.join(", ") });
      }
    ),

  confirmPassword: ValidationRules.campoRequerido("confirmar contraseña")
    .oneOf([Yup.ref("newPassword")], "Las contraseñas no coinciden"),
}); 