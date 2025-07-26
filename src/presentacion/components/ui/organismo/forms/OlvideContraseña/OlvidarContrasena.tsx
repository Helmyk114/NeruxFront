import { Title1 } from "../../../atomos/textos/titles/level1";
import { Formik } from "formik";
import { ButtonAtom } from "../../../atomos/button/ButtonAtom";
import { olvideContraseñaConfig } from "../../../../../config/forms/OlvideContraseñaConfig";
import React from "react";
import { OlvideContraseñaFormfields } from "../../../moleculas/formsFields/OlvideContraseñaFormfields";
import InputsOtp from "../../../atomos/form/InputOtp";
import { VentanaModal } from "../../modal";

export default function OlvideContraseñaForm(): JSX.Element {
     const [value, setValue] = React.useState("");
     const [isOpen, setIsOpen] = React.useState(false);
     const cerrarModal = () => setIsOpen(false);
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
          //const result = await handleLoginValidation(values);
          const email = values.email;
          console.log(email);

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
              <OlvideContraseñaFormfields/>
            
            <div className="flex justify-center mt-6">
              <ButtonAtom
                texto="Enviar"
                text="white text-lg"
                className="w-3/5"
                 onClick={() => setIsOpen(true)} 
                disabled={isSubmitting || !isValid || !values.email}
              />
            </div>
          </form>
        )}
      </Formik>
      
   {
    isOpen &&(
        <VentanaModal
    onClose={cerrarModal}
    size="md"
    isOpen={true}
    isDimissable={false}
    hideCloseButton={false}
    header={<h2 className="felx justify-center m-auto">Img</h2>}
    body={
      <div className="flex flex-col items-center">
         <h1 className="text-center font-bold text-4xl mb-5">Revisa tu correo</h1>
           <p className="text-base text-center">Hemos enviado un código de verificación a tu correo electrónico. Por favor, ingresa el código, para continuar con el proceso de recuperación de tu contraseña.</p>
           <div className="flex-row gap-5 mt-3 mb-5">
              <InputsOtp className="flex gap-x-5" value={value} length={6} onValueChange={setValue} size="md" color="default" variant="bordered"
               />
           </div>
      </div>
    }
    footer={<ButtonAtom 
    texto="Verificar"
    type="submit"
    size="lg"
        className="text-white mb-5 w-96 mx-auto"></ButtonAtom>}
   />
    )
   }

    </div>
    
  );
 

}
