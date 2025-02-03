import { Field, Formik } from "formik";
import InputPassword from "../../atomos/form/InputPassword";
import InputFiled from "../../atomos/form/Input";
import {
  handleLoginValidation,
  loginValidationSchema,
} from "../../../../../utils/validations/loginValidationSchema";
import ButtonAtom from "../../atomos/ButtonAtom";

import { LoginUseCase } from "../../../../../domain/useCase/LoginUseCase";
import { useNavigate } from "react-router-dom";

export default function LoginForm(): JSX.Element {
  const initialValues = {
    username: "",
    password: "",
  };

  const loginUseCase = new LoginUseCase();
  const navigate = useNavigate();

  return (
    <div className="p-10 mt-10 w-full ml-4 justify-center">
      <h1 className="text-2xl font-bold mb-16 text-center">Iniciar sesión</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          //const result = await handleLoginValidation(values);
          const newUser = await loginUseCase.execute(
            values.username,
            values.password
          );
          if (newUser.user.has_changed_password === 1) {
            navigate("/Nueva/Contraseña");
          } else {
            navigate("/clientes");
          }
          // if (result.error) {
          //   setErrors({ username: result.message, password: result.message });
          // }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit}) => (
          <form
            className="space-y-4 items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className=" mb-12 justify-center items-center">
              <Field
                nombre="username"
                label="Usurio"
                component={InputFiled}
                className="w-9/12 mx-auto mb-2"
                
              />
            </div>
            <div className="">
              <Field
                nombre="password"
                label="Contraseña"
                component={InputPassword}
                className="w-9/12 mx-auto mb-2"
              />
            </div>

            <div className="flex justify-end items-center mr-16 ">
              <a
                href="/olvidarContraseña"
                className="text-blue-500 text-base underline mt-2"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="">
            <ButtonAtom
              text="Iniciar sesión"
              textColor="white"
              className="w-9/12 ml-16 mt-2"
              disabled={
                isSubmitting || !isValid || !values.username || !values.password
              }
            />
            </div>
         
           
          </form>
        )}
      </Formik>
    </div>
  );
}