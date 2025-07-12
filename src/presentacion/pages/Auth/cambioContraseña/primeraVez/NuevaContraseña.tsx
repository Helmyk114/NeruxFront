
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlantillaGenerica } from "../../../../components/ui/template";
import { TextoInicio } from "../../../../components/ui/atomos";
import NewPasswordForm from "../../../../components/ui/organismo/forms/NewPassword/NewPassword";
import PopUpSuccess from "../../../../../shared/utils/popUps/success";


export function NuevaContraseña(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <PlantillaGenerica
        texto={
          <TextoInicio
            spans={[
              {
                texto: "¡VAMOS A CREAR TU\n NUEVA CONTRASEÑA!\n",
                className: "font-bold text-3xl lg:text-4xl",
              },
              {
                texto: "Solo queda un paso más para\n completar el proceso.",
                className: "italic 2xl lg:text-2xl",
              },
            ]}
            className={
              "font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
            }
          />
        }
        formulario={<NewPasswordForm onSuccess={() => setIsModalOpen(true)} />}
      />

      <PopUpSuccess
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        titulo="Contraseña restablecida con éxito"
        startText="Tu contraseña ha sido restablecida correctamente.
                  Ahora puedes iniciar sesión con tu nueva contraseña.
                  "
        endText="¡Gracias por tu paciencia!"
        textButton="Iniciar sesión"
        onClick={() => navigate("/")}
      />
    </>
  );
}
