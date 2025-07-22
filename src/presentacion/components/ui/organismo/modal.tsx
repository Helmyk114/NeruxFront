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
  hideCloseButton: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export function VentanaModal({
  isOpen,
  onClose,
  isDimissable,
  hideCloseButton = false,
  header,
  body,
  footer,
}: VentanaModalProps): JSX.Element {
  return (
    <Modal
      classNames={{
        base: "dark:bg-base-sidebar",
        header: "border-b-[1px] border-base-fourth w-[90%] mx-auto",
      }}
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
        <ModalFooter className="flex flex-col ml-auto">{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
}
