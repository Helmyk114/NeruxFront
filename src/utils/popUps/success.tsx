import React from "react";
import NotificationTemplate from "../../presentacion/components/ui/template/notificaciones/notificacion";
//import ImagenSucces from "../../images/Variant8.png";

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
        header={"Header"}
        body={"Body"}
        footer={"footer"}
      />
    </>
  );
};

export default PopUpSuccess;
