import React from "react";
import { Button } from "@nextui-org/react";

interface ButtonAtomProps {
  text: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

const ButtonAtom: React.FC<ButtonAtomProps> = ({ text, type = "submit", disabled = false }) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={disabled ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-600"} // Estilos condicionales
    >
      {text}
    </Button>
  );
};

export default ButtonAtom;
