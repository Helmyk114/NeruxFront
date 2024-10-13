import React from "react";

interface BodyPopUpProps {
  mensaje1: string;
  mensaje2: string;
}

const BodyPopUp: React.FC<BodyPopUpProps> = ({ mensaje1, mensaje2 }) => {
  return (
    <div className="whitespace-pre-line">
      <span className="font-normal">
        {mensaje1}
      </span>
      <span className="font-semibold">
        {mensaje2}
      </span>
    </div>
  );
}

export default BodyPopUp;