import React from "react";
import { Modal, useDisclosure } from "@nextui-org/react";
import {
  ContentModal,
  HeaderModal,
  FooterModal,
  BodyModal,
} from "../moleculas/ventanaModal";

interface VentanaModalProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
  style?: {
    header?: string;
    body?: string;
    footer?: string;
  };
}

const VentanaModal: React.FC<VentanaModalProps> = ({
  header,
  body,
  footer,
  style,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>Open Modal</button>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ContentModal
          header={<HeaderModal className={style?.header}>{header}</HeaderModal>}
          body={<BodyModal className={style?.body}>{body}</BodyModal>}
          footer={<FooterModal className={style?.footer}>{footer}</FooterModal>}
        />
      </Modal>
    </>
  );
};

export default VentanaModal;
