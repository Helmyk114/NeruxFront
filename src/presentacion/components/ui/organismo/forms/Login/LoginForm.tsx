import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginConfig } from "@/presentacion/config/forms/loginConfig";
import { LoginFormfields } from "../../../moleculas";
import { authUseCase } from "@/domain/usecases";
import { ButtonAtom, TextError, Title1 } from "../../../atomos";

export default function LoginForm(): JSX.Element {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="w-full">
      <Title1
        clasname="mb-[58px] text-center text-typography-first"
        titulo="Iniciar sesión"
      />
      <Formik
        initialValues={loginConfig.initialValues}
        validationSchema={loginConfig.validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { token, redirect } = await authUseCase.login(values);
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
            <LoginFormfields />
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
