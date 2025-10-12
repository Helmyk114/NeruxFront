import { authValidations } from "@/common/validation";
import { LoginCommand } from "@/presentation/models";
import { object, ObjectSchema, string } from "yup";

interface LoginConfig {
  initialValues: LoginCommand;
  validationSchema: ObjectSchema<LoginCommand>;
}

export const loginConfig: LoginConfig = {
  initialValues: {
    username: "",
    password: "",
  },

  validationSchema: object().shape({
    username: authValidations(string(), [{ type: "required" }]),
    password: authValidations(string(), [{ type: "required" }]),
  }) as ObjectSchema<LoginCommand>,
};
