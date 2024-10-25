import React from "react";
import { ModalContent } from "@nextui-org/react";

interface ModalContentProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

const ContentModal: React.FC<ModalContentProps> = ({ header, body, footer}) => {
  return (
    <ModalContent>
      {header}
      {body}
      {footer}
    </ModalContent>
  )
};

export default ContentModal;
