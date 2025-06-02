import { ValidationRules } from "../../../../../../shared/validations/ValidationRules";
import * as Yup from 'yup';

type LoginFormValues = {
  username: string;
  password: string;
}

interface LoginConfig {
  initialValues: LoginFormValues,
  validationSchema: Yup.ObjectSchema<Partial<LoginFormValues>>,
}

export const loginConfig: LoginConfig ={
  initialValues: {
    username: "",
    password: ""
  } ,
  validationSchema: Yup.object().shape({
    username: ValidationRules.campoRequerido({
      campo: "El usuario",
    }),
    password: ValidationRules.campoRequerido({
      campo: "La contraseña",
    })
  }) as Yup.ObjectSchema<Partial<LoginFormValues>>,
}