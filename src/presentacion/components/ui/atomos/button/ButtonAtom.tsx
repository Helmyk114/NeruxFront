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

export function ButtonAtom({
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
}: ButtonAtomProps): JSX.Element {
  return (
    <Button
      type={type}
      isDisabled={disabled}
      className={`${
        disabled
          ? "bg-button-disable text-typography-thrith font-OpenSans"
          : backgroundColor
      } ${className} ${text} rounded-lg font-OpenSans`}
      startContent={startIcon}
      endContent={endIcon}
      size={size}
      onPress={onClick}
    >
      {texto}
    </Button>
  );
}
