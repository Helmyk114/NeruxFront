import * as Yup from "yup";
import { ValidationRules } from "./ValidationRules";

// Definimos un límite para los intentos fallidos
const MAX_ATTEMPTS = 3;
let attempts = 0;

export const loginValidationSchema = Yup.object().shape({
  username: ValidationRules.campoRequerido("usuario")
    .concat(ValidationRules.minLength("usuario", 5))
    .concat(ValidationRules.maxLength("usuario", 20))
    .test("invalid-username", "Usuario inválido. Por favor, verifica tus datos.", (value) => {
      if (value === "invalidUser") {
        return false;
      }
      return true;
    }),
  password: ValidationRules.campoRequerido("contraseña")
    .test("invalid-password", "Contraseña inválida. Por favor, intenta nuevamente.", (value) => {
      if (value === "invalidPass") {
        return false;
      }
      return true;
    }),
});

// Mensaje general para intentos fallidos
export const handleLoginValidation = async (values: { username: string; password: string }) => {
  attempts += 1;

  if (attempts > MAX_ATTEMPTS) {
    return {
      error: true,
      message: "Se ha excedido el número máximo de intentos. Por favor, inténtelo más tarde.",
    };
  }

  //  validaciones de backend
  if (values.username !== "correctUser" || values.password !== "correctPass") {
    return {
      error: true,
      message: "Hubo un problema al enviar los datos. Verifique su información.",
    };
  }

  return { error: false, message: "Inicio de sesión exitoso" };
};
