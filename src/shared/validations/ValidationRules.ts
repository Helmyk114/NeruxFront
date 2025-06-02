import * as Yup from "yup";

type ValidatioOption = {
  campo?: string;
  message?: string;
};

export class ValidationRules {
  static campoRequerido(option?: ValidatioOption) {
    const { campo = "Este campo", message } = option || {};
    return Yup.string().required(message || `${campo} es requerido`);
  }

  static email(option?: ValidatioOption) {
    const { campo = "Este campo", message } = option || {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return Yup.string().test(
      "email",
      message || `El formato del ${campo} no es válido`,
      (value) => (value ? emailRegex.test(value) : false)
    );
  }

  static minLength(min: number, option?: ValidatioOption) {
    const { campo = "Este campo", message } = option || {};
    return Yup.string().test("minLength", message || `${campo} debe tener al menos ${min} caracteres`, function (value) {
      return value && value.length >= min
        ? true
        : this.createError({ message: `${message || `${campo} debe tener al menos ${min} caracteres`}` });
    });
  }

  static maxLength(max: number, option?: ValidatioOption) {
    const { campo = "Este campo", message } = option || {};
    return Yup.string().test("maxLength", message || `El campo ${campo} debe tener como máximo ${max} caracteres`, function (value) {
      return value && value.length <= max
        ? true
        : this.createError({ message: `${message || `El campo ${campo} debe tener como máximo ${max} caracteres`}` });
    });
  }

  static upperCase(option?: ValidatioOption) {
    const { campo = "La contraseña", message } = option || {};
    return Yup.string().test("upperCase", message || `La ${campo} debe contener al menos una letra mayúscula`, function (value) {
      const regex = /[A-Z]/;
      return regex.test(value || "")
        ? true
        : this.createError({ message: `${message || `La ${campo} debe contener al menos una letra mayúscula`}` });
    });
  }

  static lowerCase(option?: ValidatioOption) {
    const { campo = "La contraseña", message } = option || {};
    return Yup.string().test("lowerCase", message || `La ${campo} debe contener al menos una letra minúscula`, function (value) {
      const regex = /[a-z]/;
      return regex.test(value || "")
        ? true
        : this.createError({ message: `${message || `La ${campo} debe contener al menos una letra minúscula`}` });
    });
  }

  static number(option?: ValidatioOption) {
    const { campo = "La contraseña", message } = option || {};
    return Yup.string().test("number", message || `${campo} debe contener al menos un número`, function (value) {
      const regex = /[0-9]/;
      return regex.test(value || "")
        ? true
        : this.createError({ message: `${message || `${campo} debe contener al menos un número`}` });
    });
  }

  static specialCharacter(option?: ValidatioOption) {
    const { campo = "La contraseña", message } = option || {};
    return Yup.string().test("specialChar", message || `La ${campo} debe contener al menos un carácter especial`, function (value) {
      const regex = /[!@#$%^&*(),.?":{}|<>]/;
      return regex.test(value || "")
        ? true
        : this.createError({ message: `${message || `La ${campo} debe contener al menos un carácter especial`}` });
    });
  }

  static passwordMatch(ref: string, option?: ValidatioOption) {
    const { campo = "Este campo", message } = option || {};
    return Yup.string().test("passwordMatch", message || `El ${campo} no coincide`, function (value) {
      return value === this.resolve(Yup.ref(ref))
        ? true
        : this.createError({ message: `${message || `El ${campo} no coincide`}` });
    });
  }
}
