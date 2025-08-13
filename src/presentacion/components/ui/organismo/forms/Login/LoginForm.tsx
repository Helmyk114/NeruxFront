import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginConfig } from "@/presentacion/config/forms/login.config";
import {
  ButtonAtom,
  TextError,
  Title1,
} from "@/presentacion/components/ui/atomos";
import { LoginFormfields } from "@/presentacion/components/ui/moleculas";
import { authUseCase } from "@/domain";

export function LoginForm(): JSX.Element {
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
            const { redirect } = await authUseCase.login(values);
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
        {({ isValid, handleSubmit, dirty }) => (
          <form onSubmit={handleSubmit}>
            <LoginFormfields />
            <div className="flex justify-center mt-6">
              <ButtonAtom
                texto="Iniciar sesión"
                text="white text-lg"
                className="w-3/5"
                disabled={!isValid || !dirty}
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
