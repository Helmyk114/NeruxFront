import { Title1 } from "../../../atomos/textos/titles/level1";
import { Formik } from "formik";
import { ButtonAtom } from "../../../atomos/button/ButtonAtom";
import { olvideContraseñaConfig } from "../../../../../config/forms/OlvideContraseñaConfig";
import { OlvideContraseñaFormfields } from "../../../moleculas/formsFields/OlvideContraseñaFormfields";

import { useDisclosure } from "@heroui/react";
import { OlvidarContraseDrawer } from "./OlveidarContraseñaDrawer";
import { useState } from "react";
import { authUseCase } from "@/domain/auth/authUseCase";

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
            <OlvideContraseñaFormfields />

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
