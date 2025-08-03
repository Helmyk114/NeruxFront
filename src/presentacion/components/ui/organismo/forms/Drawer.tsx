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
    classNames={{
      base: "dark:bg-base-second",
      header: "border-b-[1px] border-base-fourth w-[90%] mx-auto",
      footer: "border-t-[1px] border-base-fourth w-[90%] mx-auto",
    }}
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
