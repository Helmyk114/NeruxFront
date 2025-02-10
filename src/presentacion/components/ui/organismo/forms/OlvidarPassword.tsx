import { Field, Formik } from "formik";
import InputPassword from "../../atomos/form/InputPassword";
import { OlvidarContraseñaValidationSchema } from "../../../../../utils/validations/olvidarContraseñaValidationSchema";
import ButtonAtom from "../../atomos/ButtonAtom";


import { useNavigate } from "react-router-dom";
import VentanaModal from "../modal";
import { useState } from "react";
import { IconCircleCheck } from "@tabler/icons-react";

export default function OlvidarContraseñaForm(): JSX.Element {
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-10 mt-10 w-full ml-4 justify-center">
      <h1 className="text-2xl font-bold mb-16 text-center">Configura tu nueva contraseña</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={OlvidarContraseñaValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setIsModalOpen(true); 
          setSubmitting(false);
        }}

      
      >
        {({ isSubmitting, isValid, values, handleSubmit}) => (
          <form
            className="space-y-4 items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className=" mb-12 justify-center items-center">
              <Field
                nombre="newPassword"
                label="Nueva contraseña"
                component={InputPassword}
                className="w-9/12 mx-auto mb-2"
                
              />
            </div>
            <div className="">
              <Field
                nombre="confirmPassword"
                label="Repetir contraseña"
                component={InputPassword}
                className="w-9/12 mx-auto mb-2"
              />
            </div>
           
            <div className="">
              <ButtonAtom
                text="Enviar"
                textColor="white"
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
        )}
      </Formik>
      <VentanaModal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         isDimissable={true}
         header={ <div className="flex-col m-auto justify-center items-center gap-2">
          <div>
          <IconCircleCheck className=" text-green-500 " size={98}/>
          </div>
         <div className="justity-center m-auto">
         <h2 className="text-xl font-bold">¡Listo!</h2>
         </div>
         
        </div>}
         body={<p>Tu contraseña ha sido actualizada exitosamente.
          Ahora puedes volver a iniciar sesión con tu nueva contraseña.
          ¡Gracias por tu paciencia!.</p>}
         footer={<div className="justify-center w-full  m-auto">
              <ButtonAtom
             text="Cerrar"
             textColor="white"
             className=" justify-center items-center w-9/12"
             onClick={() => setIsModalOpen(false)}
          />
         </div>
       
        }
      />
    </div>
  );
}