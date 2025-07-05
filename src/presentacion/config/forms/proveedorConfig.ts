import * as Yup from 'yup';
import { ProveedorForm } from "@/domain/entities";
import { ValidationRules } from '@/shared/validations/ValidationRules';

interface ProveedorConfig {
  intiatialValues: ProveedorForm;
  validationSchema: Yup.ObjectSchema<ProveedorForm>;
}

export const  proveedorConfig: ProveedorConfig = {
  intiatialValues: {
    name: "",
    business: "",
    email: "",
    phone: "",
    note: "",
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().concat(ValidationRules.campoRequerido()),
    business: Yup.string().optional(),
    email: Yup.string().optional().concat(ValidationRules.email()),
    phone: Yup.string().concat(ValidationRules.campoRequerido()),
    note: Yup.string().optional(),
  }) as Yup.ObjectSchema<ProveedorForm>,
}