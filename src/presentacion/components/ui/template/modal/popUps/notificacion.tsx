import { VentanaModal } from "@/presentacion/components/ui/organismo";

interface ModalTemplateProps {
  isOpen: boolean;
  onClose: () => void;
  hideCloseButton?: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export const ModalTemplate: React.FC<ModalTemplateProps> = ({
  isOpen,
  onClose,
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
      hideCloseButton={hideCloseButton}
      header={header}
      body={body}
      footer={footer}
    />
  );
};
