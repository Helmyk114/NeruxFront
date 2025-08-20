import { object, ObjectSchema, string } from "yup";
import { LoginForm } from "@/domain";
import { authValidations } from "@/shared";

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
