import React from "react";
import { ModalHeader } from "@nextui-org/react";

interface ModalHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const HeaderModal: React.FC<ModalHeaderProps> = ({ className, children }) => {
  return (
    <ModalHeader className={className}>
      {children}
    </ModalHeader>
  );
}

export default HeaderModal;