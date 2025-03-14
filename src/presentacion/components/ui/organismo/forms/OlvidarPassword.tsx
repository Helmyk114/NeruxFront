import { Field, Formik } from "formik";
import InputPassword from "../../atomos/form/InputPassword";
import { OlvidarContraseñaValidationSchema } from "../../../../../utils/validations/olvidarContraseñaValidationSchema";
import ButtonAtom from "../../atomos/ButtonAtom";


import { useNavigate } from "react-router-dom";
import VentanaModal from "../modal";
import { useState } from "react";
import { IconCheck, IconCircleCheck, IconX } from "@tabler/icons-react";

export default function OlvidarContraseñaForm(): JSX.Element {
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-10 mt-1 w-full ml-4 justify-center">
      <h1 className="text-2xl font-bold mb-7 text-center">Configura tu nueva contraseña</h1>
      <p className="text-medium mb-4 text-center">Tu nueva contraseña debe cumplir con los siguientes requisitos:</p>
      
      <Formik
        initialValues={initialValues}
        validationSchema={OlvidarContraseñaValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setIsModalOpen(true); 
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit, touched, errors }) => {
          const reglasValidacion = [
            {
              mensaje: "Al menos una letra mayúscula.",
              valido: /[A-Z]/.test(values.newPassword),
            },
            {
              mensaje: "Al menos un carácter especial (&, ., !, @, #, $).",
              valido: /[&.,!@#$]/.test(values.newPassword),
            },
            {
              mensaje: "Al menos un número.",
              valido: /\d/.test(values.newPassword),
            },
            {
              mensaje: "Mínimo de 8 caracteres.",
              valido: values.newPassword.length >= 8,
            },
            {
              mensaje: "Las contraseñas coinciden.",
              valido:
                values.confirmPassword.length > 0 &&
                values.newPassword === values.confirmPassword,
            },
          ];

          return (
            <form className="space-y-4 text-small items-center justify-center" onSubmit={handleSubmit}>
              
              {(touched.newPassword || touched.confirmPassword) && (
                <div className="justify-center ml-12 mb-4">
                  {reglasValidacion.map((regla, index) => (
                    <p
                      key={index}
                      className={`flex items-center justify-start ${
                        regla.valido ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {regla.valido ? (
                        <IconCheck className="text-green-500 mr-2" />
                      ) : (
                        <IconX className="text-red-500 mr-2" />
                      )}
                      {regla.mensaje}
                    </p>
                  ))}
                </div>
              )}
      <div>
      <div className=" mb-10 mt-10 justify-center items-center">
              <Field
                nombre="newPassword"
                label="Nueva contraseña"
                component={InputPassword}
                className="w-9/12 mx-auto mb-2"
                
              />
            </div>
            <div className="mt-10">
              <Field
                nombre="confirmPassword"
                label="Repetir contraseña"
                component={InputPassword}
                className="w-9/12 mx-auto mb-2 mt-10"
              />
            </div>
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
        )}}
      </Formik>
      <VentanaModal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         isDimissable={true}
         header={ <div className="flex-col m-auto justify-center items-center gap-2">
          <div>
          <IconCircleCheck className=" text-green-500 " size={100}/>
          </div>
         <div className="justity-center m-auto">
         <h2 className="text-xl font-bold">¡Listo!🎉</h2>
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