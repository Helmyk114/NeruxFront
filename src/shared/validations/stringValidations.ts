// skipcq: JS-C1003
import * as Yup from "yup";

//Tipo de validaciones disponibles para un campo tipo string
type StringValidationsRule =
  | { type: "required"; message?: string }
  | { type: "maxLength"; value: number; message?: string }
  | { type: "minLength"; value: number; message?: string }
  | { type: "alphanumeric"; message?: string }
  | { type: "alphabetic"; message?: string }
  | { type: "numeric"; message?: string }
  | { type: "email"; message?: string }
  | { type: "optional"; message?: string }
  | { type: "nullable"; message?: string };

//Función que aplica múltiples validaciones a un campo tipo string
export function stringValidations(
  schema: Yup.StringSchema<string | undefined | null, Yup.AnyObject>,
  rules: StringValidationsRule[]
): Yup.StringSchema<string | undefined | null, Yup.AnyObject> {
  //acc: Acumulator para las validaciones aplicadas
  //rule: Regla de validación a aplicar
  return rules.reduce<
    Yup.StringSchema<string | undefined | null, Yup.AnyObject>
  >((acc, rule) => {
    switch (rule.type) {
      case "required":
        return acc.required(rule.message || "Este campo es requerido");
      case "maxLength":
        return acc.max(
          rule.value,
          rule.message || `Máximo ${rule.value} caracteres permitidos`
        );
      case "minLength":
        return acc.min(
          rule.value,
          rule.message || `Mínimo ${rule.value} caracteres requeridos`
        );
      case "alphanumeric":
        return acc.matches(
          /^[a-zA-Z0-9 ]*$/,
          rule.message || "No se permite caracteres especiales"
        );
      case "alphabetic":
        return acc.matches(
          /^[a-zA-Z ]*$/,
          rule.message || "Solo se permiten letras"
        );
      case "numeric":
        return acc.matches(
          /^[0-9]*$/,
          rule.message || "Solo se permiten números"
        );
      case "email":
        return acc.matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          rule.message || "Ingrese un correo electrónico válido"
        );
      case "optional":
        return acc.notRequired();
      case "nullable":
        return acc.nullable();
      default:
        return acc;
    }
  }, schema);
}
