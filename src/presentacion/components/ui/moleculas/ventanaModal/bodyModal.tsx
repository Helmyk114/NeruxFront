import React from "react";
import { ModalBody } from "@nextui-org/react";

interface BodyModalProps {
  className?: string;
  children: React.ReactNode;
}

const BodyModal: React.FC<BodyModalProps> = ({ className, children }) => {
  return (
    <ModalBody className={className}>
      {children}
    </ModalBody>
  );
}

export default BodyModal;