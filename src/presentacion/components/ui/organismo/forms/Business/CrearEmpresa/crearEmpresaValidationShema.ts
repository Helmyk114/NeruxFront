import * as Yup from "yup";
import { ValidationRules } from "../../../../../../../shared/validations/ValidationRules";
export const crearEmpresaValidationSchema = Yup.object().shape({
  nameBusiness: Yup.string()
    .concat(
      ValidationRules.campoRequerido({
        campo: "El nombre de la empresa",
      })
    )
    .concat(
      ValidationRules.minLength(3, {
        campo: "El nombre de la empresa",
        message: "El nombre de la empresa debe tener al menos 3 caracteres",
      })
    ),

  nit: Yup.string()
    .concat(
      ValidationRules.campoRequerido({
        campo: "El NIT",
      })
    )
    .concat(
      ValidationRules.maxLength(12, {
        campo: "El NIT",
        message: "El NIT debe tener como máximo 12 caracteres",
      })
    ),
  phoneBusiness: Yup.string()
    .concat(
      ValidationRules.campoRequerido({
        campo: "El teléfono de la empresa",
      })
    )
    .concat(
      ValidationRules.maxLength(10, {
        campo: "El teléfono de la empresa",
        message:
          "El teléfono de la empresa debe tener como máximo 10 caracteres",
      })
    ),
  addressBusiness: Yup.string()
    .concat(
      ValidationRules.campoRequerido({
        campo: "La dirección de la empresa",
      })
    )
    .concat(
      ValidationRules.maxLength(100, {
        campo: "La dirección de la empresa",
        message:
          "La dirección de la empresa debe tener como máximo 100 caracteres",
      })
    ),
  emailBusiness: Yup.string()
    .concat(
      ValidationRules.campoRequerido({
        campo: "El correo electrónico de la empresa",
      })
    )
    .concat(
      ValidationRules.email({
        campo: "El correo electrónico",
        message: "El formato del correo electrónico no es válido",
      })
    )
    .concat(
      ValidationRules.maxLength(50, {
        campo: "El correo electrónico de la empresa",
        message:
          "El correo electrónico de la empresa debe tener como máximo 50 caracteres",
      })
    ),
  category: Yup.string()
    .concat(
      ValidationRules.campoRequerido({
        campo: "La categoría",
      })
    )
    .concat(
      ValidationRules.minLength(1, {
        campo: "La categoría",
        message: "La categoría debe tener al menos 1 carácter",
      })
    )
    .concat(
      ValidationRules.maxLength(3, {
        campo: "La categoría",
        message: "La categoría debe tener como máximo 3 caracteres",
      })
    ),
});
