import React from "react";
import VentanaModal from "../../organismo/modal";

interface ModalTemplateProps{
  isOpen: boolean;
  onClose: () => void;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const ModalTemplate: React.FC<ModalTemplateProps> = ({ isOpen, onClose, header, body, footer}) => {
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

export default ModalTemplate;
