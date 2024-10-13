import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

interface ButtonProps{
  ruta: string;
  texto: string;
}

const ButtonModal: React.FC<ButtonProps> = ({ ruta, texto }) => {
  return(
    <Link to={ruta}>
      <Button className="w-96 rounded-lg bg-pink-500 mb-5" >
        {texto}
      </Button>
    </Link>
  );
};

export default ButtonModal;