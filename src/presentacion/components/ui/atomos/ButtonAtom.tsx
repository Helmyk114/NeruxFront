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
      className={`w-full ${disabled ? "bg-gray-400" : "bg-purple-500 hover:bg-purple-600"} rounded-lg`} // Añadimos w-full y rounded-lg para el mismo ancho y estilo que los inputs
      style={{ borderRadius: "12px" }} // Agregamos un border-radius consistente
    >
      {text}
    </Button>
  );
};

export default ButtonAtom;
