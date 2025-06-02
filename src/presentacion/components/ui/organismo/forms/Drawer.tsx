import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/react";

interface DrawerPropd {
  isOpen: boolean;
  onClose: () => void;
  isDimissable: boolean;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

export function DrawerWrapper({
  isOpen,
  onClose,
  isDimissable,
  header,
  body,
  footer,
}: DrawerPropd): JSX.Element {
  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onClose}
      isDismissable={isDimissable}
      backdrop="blur"
    >
      <DrawerContent>
        <DrawerHeader>{header}</DrawerHeader>
        <DrawerBody>{body}</DrawerBody>
        <DrawerFooter>{footer}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
