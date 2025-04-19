import * as Yup from "yup";
import { ValidationRules } from "./ValidationRules";

export const olvideContraseñaValidation = Yup.object().shape({
  email: Yup.string()
    .concat(
      ValidationRules.email({
      campo: "correo electrónico",
    })
  )
    .concat(
      ValidationRules.campoRequerido({
        campo: "correo electrónico",
      })
    )
});