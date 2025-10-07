import { LoginForm } from "@/domain/auth/auth.dto";
import { authValidations } from "@/shared/validations/authValidations";
import { object, ObjectSchema, string } from "yup";
interface LoginConfig {
  initialValues: LoginForm;
  validationSchema: ObjectSchema<LoginForm>;
};

export const loginConfig: LoginConfig = {
  initialValues: {
    username: "",
    password: "",
  },
  validationSchema: object().shape({
    username: authValidations(string(), [{ type: "required" }]),
    password: authValidations(string(), [{ type: "required" }]),
  }) as ObjectSchema<LoginForm>,
};
