import { Field, Formik } from "formik";
import InputPassword from "../../atomos/form/InputPassword";
import InputFiled from "../../atomos/form/Input";
import {
  handleLoginValidation,
  loginValidationSchema,
} from "../../../../../utils/validations/loginValidationSchema";
import ButtonAtom from "../../atomos/ButtonAtom";
import { IconError404 } from "@tabler/icons-react";
import { LoginUseCase } from "../../../../../domain/useCase/LoginUseCase";

export default function LoginForm(): JSX.Element {
  const initialValues = {
    username: "",
    password: "",
  };

  const loginUseCase = new LoginUseCase();

  return (
    <div className="p-10 mt-10 w-full ">
      <h1 className="text-2xl font-bold mb-16 text-center">Iniciar sesión</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {

          //const result = await handleLoginValidation(values);
          const newUser = await loginUseCase.execute(values.username, values.password);
          console.log(newUser);
          // if (result.error) {
          //   setErrors({ username: result.message, password: result.message });
          // }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit, errors, touched }) => (
          <form
            className="space-y-4 items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className=" justify-center items-center">
              <Field
                nombre="username"
                label="Usurio"
                component={InputFiled}
                className="w-9/12 mb-10 ml-14"
                hasError={touched.username && !!errors.username}
              />
            </div>
            <div>
              <Field
                nombre="password"
                label="Contraseña"
                component={InputPassword}
                className="w-9/12 ml-14 "
                hasError={touched.username && !!errors.username}
              />
            </div>

            <div className="flex justify-end items-center">
              <a
                href="/olvidarContraseña"
                className="text-blue-500 text-base underline"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <ButtonAtom
              text="Iniciar sesión"
              textColor="white"
              className="w-9/12 ml-14"
              disabled={
                isSubmitting || !isValid || !values.username || !values.password
              }
            />
            {(touched.username || touched.password) &&
            (errors.username || errors.password) ? (
              <div className="flex text-error ml-14 mt-4">
                <IconError404 color="red" />
                <span className="font-OpenSans text-xs text-red-500 text-center ml-2">
                  {errors.username || errors.password}
                </span>
              </div>
            ) : null}
          </form>
        )}
      </Formik>
    </div>
  );
}
