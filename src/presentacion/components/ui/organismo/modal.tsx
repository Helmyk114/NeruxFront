import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

interface VentanaModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDimissable: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export default function VentanaModal ({
  isOpen,
  onClose,
  isDimissable,
  header,
  body,
  footer,
}: VentanaModalProps): JSX.Element{
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      isDismissable={isDimissable}
      backdrop="blur"
      size="xl"
    >
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
