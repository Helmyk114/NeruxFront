import { FormikValues } from "formik";

export const mapRules = (values: FormikValues) => {
  const password = values.newPassword || "";

  return [
    {
      id: 1,
      mensaje: "Mínimo 8 caracteres",
      valido: password.length >= 8 ? true : password.length > 0 ? false : null,
    },
    {
      id: 2,
      mensaje: "Al menos una mayúscula",
      valido: /[A-Z]/.test(password)
        ? true
        : password.length > 0
        ? false
        : null,
    },
    {
      id: 3,
      mensaje: "Al menos una minúscula",
      valido: /[a-z]/.test(password)
        ? true
        : password.length > 0
        ? false
        : null,
    },
    {
      id: 4,
      mensaje: "Al menos un número",
      valido: /[0-9]/.test(password)
        ? true
        : password.length > 0
        ? false
        : null,
    },
    {
      id: 5,
      mensaje: "Al menos un carácter especial (@$!%*?&._-)",
      valido: /[@$!%*?&._-]/.test(password)
        ? true
        : password.length > 0
        ? false
        : null,
    },
    {
      id: 6,
      mensaje: "Las contraseñas coinciden",
      valido:
        values.confirmPassword && values.newPassword
          ? values.confirmPassword === values.newPassword
          : null,
    },
  ];
};
