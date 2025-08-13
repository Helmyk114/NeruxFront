// skipcq: JS-C1003
import * as Yup from "yup";

// Tipo de validaciones disponibles para el Login, Olvide conraseña y Cambio de contraseña primera vez
type AuthValidation =
  | { type: "required"; message?: string }
  | { type: "minLength"; value: number; message?: string }
  | { type: "maxLength"; value: number; message?: string }
  | { type: "upperCase"; message?: string }
  | { type: "lowerCase"; message?: string }
  | { type: "number"; message?: string }
  | { type: "specialCharacter"; message?: string }
  | { type: "passwordMatch"; message?: string; refField: string }
  | { type: "email"; message?: string };

export function authValidations(
  schema: Yup.StringSchema<string | undefined | null, Yup.AnyObject>,
  rules: AuthValidation[]
): Yup.StringSchema<string | undefined | null, Yup.AnyObject> {
  return rules.reduce<
    Yup.StringSchema<string | undefined | null, Yup.AnyObject>
  >((acc, rule) => {
    switch (rule.type) {
      case "required":
        return acc.required(rule.message || "Este campo es requerido");
      case "email":
        return acc.email(
          rule.message || "Ingrese un correo electrónico válido"
        );
      case "minLength":
        return acc.min(
          rule.value,
          rule.message || `Mínimo ${rule.value} caracteres requeridos`
        );
      case "maxLength":
        return acc.max(
          rule.value,
          rule.message || `Máximo ${rule.value} caracteres permitidos`
        );
      case "upperCase":
        return acc.matches(
          /[A-Z]/,
          rule.message || "Debe contener al menos una letra mayúscula"
        );
      case "lowerCase":
        return acc.matches(
          /[a-z]/,
          rule.message || "Debe contener al menos una letra minúscula"
        );
      case "number":
        return acc.matches(
          /\d/,
          rule.message || "Debe contener al menos un número"
        );
      case "specialCharacter":
        return acc.matches(
          /[@$!%*?&._-]/,
          rule.message || "Debe contener al menos un carácter especial"
        );
      case "passwordMatch":
        return acc.test(
          "passwordMatch",
          rule.message || "Las contraseñas no coinciden",
          function (value) {
            return value === this.parent[rule.refField];
          }
        );
      default:
        return acc;
    }
  }, schema);
}
