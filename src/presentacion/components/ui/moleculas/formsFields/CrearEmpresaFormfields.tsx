import { Field } from "formik";
import { InputFiled } from "../../atomos";

export function CrearEmpresaFormFields(): JSX.Element {
  return (
    <>
      <div className="flex flex-row gap-12">
        <Field
          nombre="name"
          label="Nombre de la empresa"
          component={InputFiled}
          isRequired
          maxLength={50}
          minLength={3}
        />
        <Field
          nombre="nit"
          label="NIT o identificación fiscal"
          component={InputFiled}
          isRequired
          maxLength={12}
        />
      </div>
      <div className="flex flex-row gap-12">
        <Field
          nombre="phone"
          label="Télefono de contacto"
          component={InputFiled}
          isRequired
          maxLength={10}
        />
        <Field
          nombre="address"
          label="Dirección principal"
          component={InputFiled}
          isRequired
          maxLength={100}
        />
      </div>
      <div className="flex flex-row gap-12">
        <Field
          nombre="email"
          label="Correo electrónico de la empresa"
          component={InputFiled}
          isRequired
          maxLength={50}
        />
      </div>
    </>
  );
}
