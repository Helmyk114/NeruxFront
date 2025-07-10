import * as Yup from 'yup';
import { ValidationRules } from '../../../../../../shared/validations/ValidationRules';

type OlvideContraseñaFormValues ={
  email: string;
}

interface OlvideContraseñaConfig {
    initialValues: OlvideContraseñaFormValues;
    validationSchema: Yup.ObjectSchema<Partial<OlvideContraseñaFormValues>>;
}

export const olvideContraseñaConfig: OlvideContraseñaConfig = {
    initialValues: {
        email: "",
    },
    validationSchema: Yup.object().shape({
        email: ValidationRules.email({
            campo: "correo electrónico",
        }).concat(
            ValidationRules.campoRequerido({
                campo: "El correo electrónico",
            })
        ),
    }) as Yup.ObjectSchema<Partial<OlvideContraseñaFormValues>>,
}
