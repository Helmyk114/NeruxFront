import React from "react";
import { Button } from "@heroui/react";

interface ButtonAtomProps {
  texto: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  text?: string;
  backgroundColor?: string; 
  onClick?: () => void;
  className?: string;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  texto,
  type = "submit",
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  size = "md",
  text,
  backgroundColor = "bg-button-active", 
  className,
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={`${
        disabled ? "bg-button-disable text-texts-dislabel font-OpenSans" : backgroundColor
      } ${className} ${text} rounded-lg font-OpenSans`}
      startContent={startIcon}
      endContent={endIcon}
      size={size}
      onPress={onClick}
    >
      {texto}
    </Button>
  );
};

export default ButtonAtom;
