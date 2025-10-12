import { authValidations } from "@/common/validation";
import { ForgetPasswordCommand } from "@/presentation/models";
import { object, string, ObjectSchema } from "yup";

interface OlvideContraseñaConfig {
  initialValues: ForgetPasswordCommand;
  validationSchema: ObjectSchema<ForgetPasswordCommand>;
}

export const olvideContraseñaConfig: OlvideContraseñaConfig = {
  initialValues: {
    email: "",
  },

  validationSchema: object().shape({
    email: authValidations(string(), [{ type: "required" }, { type: "email" }]),
  }) as ObjectSchema<ForgetPasswordCommand>,
};
