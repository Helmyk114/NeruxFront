import React from "react";
import VentanaModal from "../../organismo/modal";
import BodyPopUp from "../../atomos/notificaciones/bodyPopUp";
import TitleImagePopUp from "../../atomos/notificaciones/titleImagePopUp";
import ButtonModal from "../../atomos/notificaciones/buttonModal";

interface NotificationTemplateProps{
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  title: string;
  mensaje1: string;
  mensaje2: string;
  texto: string;
  ruta: string;
}

const NotificationTemplate: React.FC<NotificationTemplateProps> = ({ isOpen, onClose, imageUrl, title, mensaje1, mensaje2, texto, ruta }) => {
  return (
    <VentanaModal 
      isOpen={isOpen}
      onClose={onClose}
      isDimissable={false}
      header={
        <TitleImagePopUp 
          imageUrl={imageUrl} 
          title={title} 
        />}
      body={
        <BodyPopUp
          mensaje1={mensaje1}
          mensaje2={mensaje2}
        />
      }
      footer={<ButtonModal
          texto={texto}
          ruta={ruta}
        />
      }
      style={{
        header: "flex justify-center text-3xl",
        body: " text-center",
        footer: "flex justify-center"
      }}
    />
  );
};

export default NotificationTemplate;
