import React from "react";
import NotificationTemplate from "../../presentacion/components/ui/template/notificaciones/notificacion";
import ImagenSucces from "../../../images/Variant8.png";

interface PopUpSuccessProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopUpSuccess: React.FC<PopUpSuccessProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <NotificationTemplate
        isOpen={isOpen}
        onClose={onClose}
        imageUrl={ImagenSucces}
        title="¡Listo! 🎉"
        mensaje1={`Tu contraseña ha sido restablecida correctamente. ${"\n"}Ahora puedes iniciar sesión con tu nueva contraseña.`}
        mensaje2={`${"\n"}¡Gracias por tu paciencia!`}
      />
    </>
  );
};

export default PopUpSuccess;
