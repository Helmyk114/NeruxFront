import { OlvideContraseñaForm } from "@/domain/auth/auth.dto";
import { authValidations } from "@/shared/validations/authValidations";
import { object, string, ObjectSchema } from "yup";

interface OlvideContraseñaConfig {
  initialValues: OlvideContraseñaForm;
  validationSchema: ObjectSchema<OlvideContraseñaForm>;
}

export const olvideContraseñaConfig: OlvideContraseñaConfig = {
  initialValues: {
    email: "",
  },
  validationSchema: object().shape({
    email: authValidations(string(), [{ type: "required" }, { type: "email" }]),
  }) as ObjectSchema<OlvideContraseñaForm>,
};
