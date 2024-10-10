import { Button } from "@nextui-org/react";
import React from "react";


interface ButtonProps{
  texto: string;
}

const ButtonModal: React.FC<ButtonProps> = ({ texto }) => {
  return(
    <Button>
      {texto}
    </Button>
  )
}

export default ButtonModal;