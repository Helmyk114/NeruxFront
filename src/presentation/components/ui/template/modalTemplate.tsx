import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";

interface ModalTemplateProps {
  isOpen: boolean;
  onClose: () => void;
  isDimissable: boolean;
  size: "sm" | "md" | "lg" | "xl";
  hideCloseButton: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export function ModalTemplate({
  isOpen,
  onClose,
  isDimissable,
  size,
  hideCloseButton = false,
  header,
  body,
  footer,
}: ModalTemplateProps): JSX.Element {
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
      size={size}
      hideCloseButton={hideCloseButton}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col">{header}</ModalHeader>
        <ModalBody className="flex flex-col">{body}</ModalBody>
        <ModalFooter className="flex flex-col">{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
}
