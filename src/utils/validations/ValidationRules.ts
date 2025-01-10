import * as Yup from 'yup';

export class ValidationRules {
  static campoRequerido(campo: string) {
    return Yup.string().required(`El campo ${campo} es requerido`);
  }

  static minLength(campo: string, min: number) {
    return Yup.string().min(min, `El campo ${campo} debe tener al menos ${min} caracteres`);
  }

  static maxLength(campo: string, max: number) {
    return Yup.string().max(max, `El campo ${campo} debe tener como máximo ${max} caracteres`);
  }

}