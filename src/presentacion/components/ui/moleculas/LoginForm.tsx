import React from "react";
import { Formik, Form } from "formik";
import InputField from "../atomos/InputField";
import ButtonAtom from "../atomos/ButtonAtom";
import { loginValidationSchema } from "../../../../validators/validacionesLogin";

const LoginForm: React.FC<{ onSubmit: (values: any) => void }> = ({ onSubmit }) => {
  const initialValues = {
    usuario: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, values }) => (
        <Form className="space-y-4">
          <InputField name="usuario" label="Usuario" placeholder="example@example.com" />
          <InputField name="password" label="Contraseña" type="password" placeholder="********" />
          <ButtonAtom
            text="Iniciar sesión"
            disabled={isSubmitting || !isValid || !values.usuario || !values.password} // Botón deshabilitado si el formulario no es válido o los campos están vacíos
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
