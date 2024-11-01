import React from "react";
import { Formik, Form } from "formik";
import InputField from "../atomos/InputField";
import ButtonAtom from "../atomos/ButtonAtom";
import { loginValidationSchema } from "../../../../validators/validacionesLogin";
import { FiUser } from "react-icons/fi"; // Ícono de usuario

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
      {({ isSubmitting, isValid, values, handleChange, handleBlur }) => (
        <Form className="space-y-4">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Iniciar sesión</h2>
          <InputField 
            name="usuario" 
            label="Usuario" 
            type="text"
            onChange={handleChange} 
            onBlur={handleBlur} 
            value={values.usuario} 
            icon={<FiUser />}
          />
          <InputField 
            name="password" 
            label="Contraseña" 
            type="password"
            onChange={handleChange} 
            onBlur={handleBlur} 
            value={values.password} 
          />
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 text-xs underline">¿Olvidaste tu contraseña?</a>
          </div>
          <ButtonAtom
            text="Iniciar sesión"
            className="w-full bg-gray-600 text-sm py-2 rounded-md mt-2"
            disabled={isSubmitting || !isValid || !values.usuario || !values.password}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
