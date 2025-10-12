import { useLogin } from "@/app/hook";
import { useRedirect } from "@/presentation/components/hook";
import { TextError, Title1 } from "../../../atom/typography";
import { Formik } from "formik";
import { loginConfig } from "@/presentation/config/form";
import { LoginFormFields } from "../../../molecule/form";
import { ButtonAtom } from "../../../atom/form/button";

export function LoginForm(): JSX.Element {
  const navigate = useRedirect();
  const { mutate, error } = useLogin();

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
            const { redirect } = await mutate(values);
            navigate(redirect);
          } catch (e) {
            console.error("Error during login:", e);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isValid, handleSubmit, dirty, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <LoginFormFields />
            <div className="flex justify-center mt-6">
              <ButtonAtom
                texto="Iniciar sesión"
                text="white text-lg"
                className="w-3/5"
                disabled={!isValid || !dirty || isSubmitting}
              />
            </div>
            {error && (
              <div className="w-3/5 mx-auto text-start text-semantic-error">
                {
                  <TextError
                    error={
                      error instanceof Error
                        ? error.message
                        : "Error desconocido durante el login"
                    }
                  />
                }
              </div>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
}
