import { useDisclosure } from "@heroui/react";
import { useState } from "react";
import { Title1 } from "../../../atom/typography";
import { Formik } from "formik";
import { olvideContraseñaConfig } from "@/presentation/config/form";
import { OlvideContraseñaFormFields } from "../../../molecule/form";
import { ButtonAtom } from "../../../atom/form/button";

export function OlvideContraseñaForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const modal = useDisclosure();

  return (
    <div className="w-full">
      <Title1
        clasname="mb-[58px] text-center"
        titulo="Recupera tu contraseña"
      />
      <Formik
        initialValues={olvideContraseñaConfig.initialValues}
        validationSchema={olvideContraseñaConfig.validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await authUseCase.forgetPassword(values);
          setSubmitting(false);
          modal.onOpen();
          setEmail(values.email);
        }}
      >
        {({ isSubmitting, isValid, handleSubmit, dirty }) => (
          <form onSubmit={handleSubmit}>
            <OlvideContraseñaFormFields />

            <div className="flex justify-center mt-6">
              <ButtonAtom
                texto="Enviar"
                text="white text-lg"
                className="w-3/5"
                disabled={isSubmitting || !isValid || !dirty}
              />
            </div>
          </form>
        )}
      </Formik>
      <OlvidarContraseDrawer
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        email={email}
      />
    </div>
  );
}
