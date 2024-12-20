import React from "react";
import VentanaModal from "../../organismo/modal";

interface NotificationTemplateProps{
  isOpen: boolean;
  onClose: () => void;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const NotificationTemplate: React.FC<NotificationTemplateProps> = ({ isOpen, onClose, header, body, footer}) => {
  return (
    <VentanaModal 
      isOpen={isOpen}
      onClose={onClose}
      isDimissable={false}
      header={header}
      body={body}
      footer={footer}
    />
  );
};

export default NotificationTemplate;
