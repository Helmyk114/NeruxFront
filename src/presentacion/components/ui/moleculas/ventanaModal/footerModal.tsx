import React from "react";
import { ModalFooter } from "@nextui-org/react";

interface ModalFooterProps {
  className?: string;
  children: React.ReactNode;
}

const FooterModal: React.FC<ModalFooterProps> = ({ className, children }) => {
  return (
    <ModalFooter className={className}>
      {children}
    </ModalFooter>
  );
}

export default FooterModal;