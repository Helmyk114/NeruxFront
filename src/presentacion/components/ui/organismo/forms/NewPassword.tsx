import { Field, Formik } from "formik";
import InputPassword from "../../atomos/form/InputPassword";
import {
  mapRules,
  NewPasswordValidationSchema,
} from "../../../../../shared/validations/NewPasswordValidationSchema";
import ButtonAtom from "../../atomos/ButtonAtom";
import VentanaModal from "../modal";
import { useState } from "react";
import { IconCheck, IconCircleCheck, IconX } from "@tabler/icons-react";
import { Title1 } from "../../atomos/textos/titles/level1";

export default function NewPasswordForm(): JSX.Element {
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

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
        initialValues={initialValues}
        validationSchema={NewPasswordValidationSchema}
        validateOnChange={true}
        validateOnBlur={true}
        validate={(values) => {
          try {
            NewPasswordValidationSchema.validateSync(values, {
              abortEarly: false,
            });
            return {};
          } catch (err: any) {
            const errors: Record<string, string> = {};
            err.inner.forEach((validationError: any) => {
              const path = validationError.path;
              const message = validationError.message;
              if (path && !errors[path]) {
                errors[path] = message;
              } else if (path && errors[path]) {
                errors[path] += `\n${message}`; // concatenar todos los mensajes
              }
            });
            return errors;
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          setIsModalOpen(true);
          setSubmitting(false);
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
                    isRequired={true}
                  />
                </div>
                <div className="mt-10">
                  <Field
                    nombre="confirmPassword"
                    label="Repetir contraseña"
                    component={InputPassword}
                    className="w-9/12 mx-auto mb-2 mt-10"
                    showError={false}
                    isRequired={true}
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
            </form>
          );
        }}
      </Formik>
      <VentanaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isDimissable={true}
        header={
          <div className="flex-col m-auto justify-center items-center gap-2">
            <div>
              <IconCircleCheck className=" text-green-500 " size={100} />
            </div>
            <div className="justity-center m-auto">
              <h2 className="text-xl font-bold">¡Listo!🎉</h2>
            </div>
          </div>
        }
        body={
          <p>
            Tu contraseña ha sido actualizada exitosamente. Ahora puedes volver
            a iniciar sesión con tu nueva contraseña. ¡Gracias por tu
            paciencia!.
          </p>
        }
        footer={
          <div className="justify-center w-full  m-auto">
            <ButtonAtom
              texto="Cerrar"
              text="white"
              className=" justify-center items-center w-9/12"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        }
      />
    </div>
  );
}
