import * as Yup from "yup";
import { BusinessForm } from "@/domain";
import { ValidationRules } from "@/shared";

interface CrearEmpresaConfig {
  initialValues: BusinessForm;
  validationSchema: Yup.ObjectSchema<BusinessForm>;
}

export const crearEmpresaConfig: CrearEmpresaConfig = {
  initialValues: {
    name: "",
    nit: "",
    email: "",
    phone: "",
    address: "",
    photo: "",
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .concat(
        ValidationRules.campoRequerido({
          campo: "El nombre de la empresa",
        })
      )
      .concat(
        ValidationRules.minLength(3, {
          campo: "El nombre de la empresa",
          message: "El nombre de la empresa debe tener al menos 3 caracteres",
        })
      ),

    nit: Yup.string()
      .concat(
        ValidationRules.campoRequerido({
          campo: "El NIT",
        })
      )
      .concat(
        ValidationRules.maxLength(12, {
          campo: "El NIT",
          message: "El NIT debe tener como máximo 12 caracteres",
        })
      ),
    phone: Yup.string()
      .concat(
        ValidationRules.campoRequerido({
          campo: "El teléfono de la empresa",
        })
      )
      .concat(
        ValidationRules.maxLength(10, {
          campo: "El teléfono de la empresa",
          message:
            "El teléfono de la empresa debe tener como máximo 10 caracteres",
        })
      ),
    address: Yup.string()
      .concat(
        ValidationRules.campoRequerido({
          campo: "La dirección de la empresa",
        })
      )
      .concat(
        ValidationRules.maxLength(100, {
          campo: "La dirección de la empresa",
          message:
            "La dirección de la empresa debe tener como máximo 100 caracteres",
        })
      ),
    email: Yup.string()
      .concat(
        ValidationRules.campoRequerido({
          campo: "El correo electrónico de la empresa",
        })
      )
      .concat(
        ValidationRules.email({
          campo: "El correo electrónico",
          message: "El formato del correo electrónico no es válido",
        })
      )
      .concat(
        ValidationRules.maxLength(50, {
          campo: "El correo electrónico de la empresa",
          message:
            "El correo electrónico de la empresa debe tener como máximo 50 caracteres",
        })
      ),
  }) as Yup.ObjectSchema<BusinessForm>,
};
