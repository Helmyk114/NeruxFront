import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

interface VentanaModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDimissable: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const VentanaModal: React.FC<VentanaModalProps> = ({
  isOpen,
  onClose,
  isDimissable,
  header,
  body,
  footer,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        isDismissable={isDimissable}
        backdrop="blur"
        size="xl"
      >
        <ModalContent>
          <>
            <ModalHeader>{header}</ModalHeader>
            <ModalBody>{body}</ModalBody>
            <ModalFooter>{footer}</ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VentanaModal;
