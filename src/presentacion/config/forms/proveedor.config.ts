import * as Yup from 'yup';
import { ProveedorForm } from '@/domain';
import { ValidationRules } from '@/shared';

interface ProveedorConfig {
  intiatialValues: ProveedorForm;
  validationSchema: Yup.ObjectSchema<ProveedorForm>;
}

export const  proveedorConfig: ProveedorConfig = {
  intiatialValues: {
    name: "",
    supplier: "",
    email: "",
    phone: "",
    note: "",
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().concat(ValidationRules.campoRequerido()),
    supplier: Yup.string().optional(),
    email: Yup.string().optional().concat(ValidationRules.email()),
    phone: Yup.string().concat(ValidationRules.campoRequerido()),
    note: Yup.string().optional(),
  }) as Yup.ObjectSchema<ProveedorForm>,
}