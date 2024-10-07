import React from "react";
import VentanaModal from "../../organismo/modal";

const NotificationTemplate: React.FC = ({}) => {
  return (
    <VentanaModal
      header="¡Listo! 🎉"
      body="Tu contraseña ha sido actualizada exitosamente.
      Ahora puedes volver a iniciar sesión con tu nueva contraseña.
      ¡Gracias por tu paciencia!"
      footer="Iniciar Sesión"
      style={{ header: "text-3xl", body: "text-base", footer: "" }}
    />
  );
};

export default NotificationTemplate;
