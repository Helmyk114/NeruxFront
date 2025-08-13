// skipcq: JS-C1003
import * as Yup from "yup";
import { NewPasswordForm } from "@/domain";
import { authValidations } from "@/shared";

interface NewPasswordConfig {
  initialValues: NewPasswordForm;
  validationSchema: Yup.ObjectSchema<NewPasswordForm>;
}

export const newPasswordConfig: NewPasswordConfig = {
  initialValues: {
    newPassword: "",
    confirmPassword: "",
  },
  validationSchema: Yup.object().shape({
    newPassword: authValidations(Yup.string(), [
      { type: "required" },
      { type: "minLength", value: 8 },
      { type: "maxLength", value: 16 },
      { type: "upperCase" },
      { type: "lowerCase" },
      { type: "number" },
      { type: "specialCharacter" },
    ]),
    confirmPassword: authValidations(Yup.string(), [
      { type: "required" },
      { type: "passwordMatch", refField: "newPassword" },
    ]),
  }) as Yup.ObjectSchema<NewPasswordForm>,
};
