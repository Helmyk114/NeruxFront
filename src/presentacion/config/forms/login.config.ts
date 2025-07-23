import * as Yup from "yup";
import { ValidationRules } from "@/shared/validations/ValidationRules";

type LoginValues = {
  username: string;
  password: string;
}

interface LoginConfig {
  initialValues: LoginValues;
  validationSchema: Yup.ObjectSchema<LoginValues>;
}

export const loginConfig: LoginConfig = {
  initialValues: {
    username: "",
    password: "",
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().concat(ValidationRules.campoRequerido({campo: "El usuario"})),
    password: Yup.string().concat(ValidationRules.campoRequerido({campo: "La contraseña"})),
  }) as Yup.ObjectSchema<LoginValues>,
};
