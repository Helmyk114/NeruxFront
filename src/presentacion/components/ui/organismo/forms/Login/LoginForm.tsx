import { Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { authUseCase } from "../../../../../../domain/usecases/auth/authUseCase";

import { Title1 } from "../../../atomos/textos/titles/level1";
import InputFiled from "../../../atomos/form/Input";
import InputPassword from "../../../atomos/form/InputPassword";
import ButtonAtom from "../../../atomos/button/ButtonAtom";

import { useState } from "react";
import { TextError } from "../../../atomos/textos/textError";
import { loginConfig } from './LoginFormCongif';

export default function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="w-full">
      <Title1 clasname="mb-[58px] text-center text-texts-level1" titulo="Iniciar sesión" />
      <Formik
        initialValues={loginConfig.initialValues}
        validationSchema={loginConfig.validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { token, redirect } = await authUseCase.login(
              values
            );
            console.log("Token de autenticación:", token);
            navigate(redirect);
          } catch (error) {
            setError(
              error instanceof Error
                ? error.message
                : "Error desconocido durante el login"
            );
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                nombre="username"
                label="Usuario"
                component={InputFiled}
                isRequired={true}
                className="w-3/5 mx-auto"
              />
            </div>
            <div className="mt-11">
              <Field
                nombre="password"
                label="Contraseña"
                component={InputPassword}
                isRequired={true}
                className="w-3/5 mx-auto"
              />
            </div>
            <div className="w-3/5 mx-auto text-end">
              <a
                href="/Olvide/Contraseña"
                className="font-OpenSans text-semantic-informacion text-sm mt-2"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="flex justify-center mt-6">
              <ButtonAtom
                texto="Iniciar sesión"
                text="white text-lg"
                className="w-3/5"
                disabled={
                  isSubmitting ||
                  !isValid ||
                  !values.username ||
                  !values.password
                }
              />
            </div>
            {error && (
              <div className="w-3/5 mx-auto text-start text-semantic-error">
                {<TextError error={error} />}
              </div>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}
