import { useState } from "react";
import { Field, Formik } from "formik";
import { IconCheck, IconX } from "@tabler/icons-react";
import {
  mapRules,
  NewPasswordValidationSchema,
} from "./NewPasswordValidationSchema";
import { yupValidate } from "@/shared";
import { authUseCase } from "@/domain";
import { newPasswordConfig } from "@/presentacion/config";
import {
  InputPassword,
  TextError,
  Title1,
  ButtonAtom,
} from "@/presentacion/components/ui/atomos";

interface NewPasswordFormProps {
  onSuccess?: () => void;
}

export function NewPasswordForm({
  onSuccess,
}: NewPasswordFormProps): JSX.Element {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="p-10 mt-1 w-full ml-4 justify-center">
      <Title1
        clasname="mb-7 text-center"
        titulo="Configura tu nueva contraseña"
      />

      <p className="text-medium mb-4 text-center">
        Tu nueva contraseña debe cumplir con los siguientes requisitos:
      </p>

      <Formik
        initialValues={newPasswordConfig.initialValues}
        validateOnChange
        validateOnBlur={false}
        validate={yupValidate(NewPasswordValidationSchema)}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await authUseCase.newPassword(
              values.newPassword,
              values.confirmPassword
            );
            if (onSuccess) onSuccess();
            setSubmitting(false);
          } catch (error) {
            setError(
              error instanceof Error
                ? error.message
                : "Error desconocido al cambiar la contraseña"
            );
          }
        }}
      >
        {({ errors, isSubmitting, isValid, values, touched, handleSubmit }) => {
          const validationRules = mapRules(errors, touched);

          return (
            <form
              className="space-y-4 text-small items-center justify-center"
              onSubmit={handleSubmit}
            >
              <div className="justify-center ml-12 mb-4">
                {validationRules.map((regla, index) => {
                  let icon = <span className="w-4 h-4 mr-2"></span>;
                  let textColor = "text-gray-500";

                  if (regla.valido !== null) {
                    icon = regla.valido ? (
                      <IconCheck className="text-semantic-exito mr-2" />
                    ) : (
                      <IconX className="text-semantic-error mr-2" />
                    );
                    textColor = regla.valido
                      ? "text-semantic-exito"
                      : "text-semantic-error";
                  }

                  return (
                    <p
                      key={index}
                      className={`flex items-center justify-start ${textColor}`}
                    >
                      {icon}
                      {regla.mensaje}
                    </p>
                  );
                })}
              </div>

              <div>
                <div className=" mb-10 mt-10 justify-center items-center">
                  <Field
                    nombre="newPassword"
                    label="Nueva contraseña"
                    component={InputPassword}
                    className="w-9/12 mx-auto mb-2"
                    showError={false}
                    isRequired
                  />
                </div>
                <div className="mt-10">
                  <Field
                    nombre="confirmPassword"
                    label="Repetir contraseña"
                    component={InputPassword}
                    className="w-9/12 mx-auto mb-2 mt-10"
                    showError={false}
                    isRequired
                  />
                </div>
              </div>

              <div className="">
                <ButtonAtom
                  texto="Enviar"
                  text="white"
                  className="w-9/12 ml-16 mt-2"
                  disabled={
                    isSubmitting ||
                    !isValid ||
                    !values.newPassword ||
                    !values.confirmPassword
                  }
                  type="submit"
                />
              </div>
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
