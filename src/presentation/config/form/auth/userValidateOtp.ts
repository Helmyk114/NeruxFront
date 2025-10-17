import { authValidations } from "@/common/validation";
import { ValidateOtpCommand } from "@/presentation/models/auth/userValidateotp";
import { object, string, ObjectSchema } from "yup";

interface ValidateOtpConfig {
  initialValues: Omit<ValidateOtpCommand, "email">;
  validationSchema: ObjectSchema<Omit<ValidateOtpCommand, "email">>;
}

export const validateOtpConfig: ValidateOtpConfig = {
  initialValues: {
    code: "",
  },

  validationSchema: object().shape({
    code: authValidations(string(), [{ type: "required" }]),
  }) as ObjectSchema<Omit<ValidateOtpCommand, "email">>,
};
