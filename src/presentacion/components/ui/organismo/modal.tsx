import React from "react";
import { Modal } from "@nextui-org/react";
import {
  ContentModal,
  HeaderModal,
  FooterModal,
  BodyModal,
} from "../moleculas/ventanaModal";

interface VentanaModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDimissable: boolean;
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
  isOpen,
  onClose,
  isDimissable,
  header,
  body,
  footer,
  style,
}) => {

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose} size="xl" isDismissable={isDimissable}>
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
