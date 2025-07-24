import { VentanaModal } from "@/presentacion/components/ui/organismo";

interface ModalTemplateProps {
  isOpen: boolean;
  onClose: () => void;
  size: "sm" | "md" | "lg" | "xl";
  hideCloseButton?: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export const ModalTemplate: React.FC<ModalTemplateProps> = ({
  isOpen,
  onClose,
  size,
  hideCloseButton = false,
  header,
  body,
  footer,
}) => {
  return (
    <VentanaModal
      isOpen={isOpen}
      onClose={onClose}
      isDimissable={false}
      size={size}
      hideCloseButton={hideCloseButton}
      header={header}
      body={body}
      footer={footer}
    />
  );
};
