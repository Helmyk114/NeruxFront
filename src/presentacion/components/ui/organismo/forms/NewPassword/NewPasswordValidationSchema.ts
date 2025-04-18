import { FormikErrors, FormikTouched } from "formik";
import { ValidationRules } from "../../../../../../shared/validations/ValidationRules";
import * as Yup from "yup";

export const NewPasswordValidationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .concat(
      ValidationRules.minLength(8, {
        campo: "nueva contraseña",
        message: "minLength:La contraseña debe tener al menos 8 caracteres",
      })
    )
    .concat(
      ValidationRules.upperCase({
        campo: "nueva contraseña",
        message: "upperCase:Debe contener al menos una mayúscula",
      })
    )
    .concat(
      ValidationRules.number({
        campo: "nueva contraseña",
        message: "number:Debe contener al menos un número",
      })
    )
    .concat(
      ValidationRules.specialCharacter({
        campo: "nueva contraseña",
        message: "specialChar:Debe contener al menos un carácter especial",
      })
    )
    .concat(ValidationRules.campoRequerido()),

  confirmPassword: Yup.string()
    .concat(
      ValidationRules.passwordMatch("newPassword", {
        message: "Las contraseñas no coinciden",
      })
    )
    .concat(ValidationRules.campoRequerido()),
});

const extractCodes = (error?: string): string[] => {
  if (!error) return [];
  return error
    .split("\n")
    .map((line) => line.split(":")[0])
    .filter(Boolean);
};

type RuleItem = {
  mensaje: string;
  valido: boolean | null;
};

type FormValues = {
  newPassword: string;
  confirmPassword: string;
};

export const mapRules = (
  errors: FormikErrors<FormValues>,
  touched: FormikTouched<FormValues>
): RuleItem[] => {
  const newPasswordErrors = extractCodes(errors?.newPassword);
  const confirmPasswordErrors = extractCodes(errors?.confirmPassword);

  const allErrorCodes = [
    ...new Set([...newPasswordErrors, ...confirmPasswordErrors]),
  ];

  const newPasswordTouched = touched?.newPassword;
  const confirmPasswordTouched = touched?.confirmPassword;

  return [
    {
      mensaje: "Al menos una letra mayúscula",
      valido: newPasswordTouched ? !allErrorCodes.includes("upperCase") : null,
    },
    {
      mensaje: "Al menos un número",
      valido: newPasswordTouched ? !allErrorCodes.includes("number") : null,
    },
    {
      mensaje: "Al menos un carácter especial",
      valido: newPasswordTouched
        ? !allErrorCodes.includes("specialChar")
        : null,
    },
    {
      mensaje: "Mínimo 8 caracteres",
      valido: newPasswordTouched ? !allErrorCodes.includes("minLength") : null,
    },
    {
      mensaje: "Las contraseñas no coinciden",
      valido: confirmPasswordTouched
        ? !allErrorCodes.includes("passwordMatch")
        : null,
    },
  ];
};
