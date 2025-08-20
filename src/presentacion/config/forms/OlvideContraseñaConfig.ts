import { object, string, ObjectSchema } from "yup";
import { OlvideContraseñaForm } from "@/domain";
import { authValidations } from "@/shared";

interface OlvideContraseñaConfig {
  initialValues: OlvideContraseñaForm;
  validationSchema: ObjectSchema<OlvideContraseñaForm>;
};

export const olvideContraseñaConfig: OlvideContraseñaConfig = {
  initialValues: {
    email: "",
  },
  validationSchema: object().shape({
    email: authValidations(string(), [{ type: "required" }, { type: "email" }]),
  }) as ObjectSchema<OlvideContraseñaForm>,
};
