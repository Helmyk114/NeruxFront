import * as Yup from "yup";

// Reglas de validación reutilizables
export const validations = {
  email: Yup.string()
    .email("Correo inválido") // Valida que el input tenga el formato de correo
    .required("El correo es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
  usuario: Yup.string()
    .email("Debe ser un correo válido con @") // Asegura que sea un correo con @
    .required("El usuario es requerido"),
};

// Esquema de validación para el formulario de login
export const loginValidationSchema = Yup.object({
  usuario: validations.email, // Usamos la validación de email aquí
  password: validations.password,
});
