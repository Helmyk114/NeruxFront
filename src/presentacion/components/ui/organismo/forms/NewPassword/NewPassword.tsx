import { useState } from "react";
import { Formik } from "formik";
import { mapRules } from "./mapRulePassword";

import { newPasswordConfig } from "@/presentacion/config";
import {
  TextError,
  Title1,
  ButtonAtom,
} from "@/presentacion/components/ui/atomos";
import { NewPasswordFromfield } from "../../../moleculas/formsFields/NewPasswordFormfields";
import { FeedbackPassword } from "./FeedBackPassword";
import { authUseCase } from "@/domain/auth/authUseCase";

interface NewPasswordFormProps {
  onSuccess?: () => void;
  email: string;
}

export function NewPasswordForm({
  onSuccess,
  email,
}: NewPasswordFormProps): JSX.Element {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col p-2 text-center gap-4">
      <Title1 titulo="Configura tu nueva contraseña" />

      <p className="text-medium text-center">
        Tu nueva contraseña debe cumplir con los siguientes requisitos:
      </p>

      <Formik
        initialValues={newPasswordConfig.initialValues}
        validationSchema={newPasswordConfig.validationSchema}
        validateOnChange
        validateOnBlur={false}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await authUseCase.newPassword(
              values.newPassword,
              values.confirmPassword,
              email
            );
            if (onSuccess) onSuccess();
          } catch (error) {
            setError(
              error instanceof Error
                ? error.message
                : "Error desconocido al cambiar la contraseña"
            );
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ values, isValid, handleSubmit, dirty, isSubmitting }) => {
          const validationRules = mapRules(values);

          return (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <FeedbackPassword rules={validationRules} />
              <NewPasswordFromfield />
              <ButtonAtom
                texto="Enviar"
                text="white"
                className="w-9/12 mx-auto"
                disabled={!isValid || !dirty || isSubmitting}
              />
              {error && (
                <div className="w-3/5 mx-auto text-start text-semantic-error">
                  {<TextError error={error} />}
                </div>
              )}
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
