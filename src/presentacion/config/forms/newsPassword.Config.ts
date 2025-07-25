//import * as Yup from 'yup';
import { NewPasswordForm } from "@/domain";


interface NewPasswordConfig {
  initialValues: NewPasswordForm;
  //validationSchema: Yup.ObjectSchema<NewPasswordForm>;
}

export const newPasswordConfig: NewPasswordConfig = {
  initialValues: {
    newPassword: "",
    confirmPassword: "",
  },
  // validationSchema: Yup.object().shape({
  //   newPassword: Yup.string()
  //     .min(8, "La contraseña debe tener al menos 8 caracteres")
  //     .required("La contraseña es requerida"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("newPassword"), null], "Las contraseñas deben coincidir")
  //     .required("Confirmar contraseña es requerido"),
  // }) as Yup.ObjectSchema<NewPasswordForm>,
}