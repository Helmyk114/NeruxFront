import { NewPasswordForm } from "@/domain/auth/auth.dto";
import { authValidations } from "@/shared/validations/authValidations";
import { object, ObjectSchema, string } from "yup";


interface NewPasswordConfig {
  initialValues: NewPasswordForm;
  validationSchema: ObjectSchema<NewPasswordForm>;
}

export const newPasswordConfig: NewPasswordConfig = {
  initialValues: {
    newPassword: "",
    confirmPassword: "",
  },
  validationSchema: object().shape({
    newPassword: authValidations(string(), [
      { type: "required" },
      { type: "minLength", value: 8 },
      { type: "maxLength", value: 16 },
      { type: "upperCase" },
      { type: "lowerCase" },
      { type: "number" },
      { type: "specialCharacter" },
    ]),
    confirmPassword: authValidations(string(), [
      { type: "required" },
      { type: "passwordMatch", refField: "newPassword" },
    ]),
  }) as ObjectSchema<NewPasswordForm>,
};
