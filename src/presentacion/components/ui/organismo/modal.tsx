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
  hideCloseButton: boolean
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export default function VentanaModal ({
  isOpen,
  onClose,
  isDimissable,
  hideCloseButton = false,
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
      hideCloseButton={hideCloseButton}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col">{header}</ModalHeader>
        <ModalBody className="flex flex-col">{body}</ModalBody>
        <ModalFooter className="flex flex-col">{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
