import { DrawerWrapper } from "../../../organismo/forms/Drawer";

export interface DrawerFormProps {
  isOpen: boolean;
  onClose: () => void;
  isDimissable: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export function DrawerForm({
  isOpen,
  onClose,
  isDimissable,
  header,
  body,
  footer,
}: DrawerFormProps): JSX.Element {
  return(
    <DrawerWrapper
      isOpen={isOpen}
      onClose={onClose}
      isDimissable={isDimissable}
      header={<div className="flex flex-col">{header}</div>}
      body={<div className="flex flex-col">{body}</div>}
      footer={<div className="flex flex-col">{footer}</div>}
      />
  ) 
}
