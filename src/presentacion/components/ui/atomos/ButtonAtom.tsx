import React from "react";
import { Button } from "@heroui/react";

interface ButtonAtomProps {
  text: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  textColor: string;
  backgroundColor?: string; 
  onClick?: () => void;
  className: string;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  text,
  type = "submit",
  disabled = false,
  startIcon,
  endIcon,
  onClick,
  size = "md",
  textColor,
  backgroundColor = "bg-purpleStart", 
  className= "",
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={`${
        disabled ? "bg-gray-400" : backgroundColor
      } ${className} ${textColor} rounded-lg`}
      style={{ borderRadius: "12px" }} 
      startContent={startIcon}
      endContent={endIcon}
      size={size}
      onPress={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonAtom;
