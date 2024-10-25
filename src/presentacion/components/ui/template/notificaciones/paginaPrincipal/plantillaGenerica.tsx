import React from "react";

interface PlantillaProps{
    izquierda : React.ReactNode;
    derecha : React.ReactNode;
}
const PlantillaGenerica: React.FC<PlantillaProps> = ({izquierda, derecha}) => (
   <div className="relative w-5/6 h-5/6 overflow-hidden">
   <div className="absolute inset-0 bg-background2  rounded-radius-34">{izquierda}</div>
   <div className="absolute inset-y-0 right-0 w-1/2 bg-background2 rounded-radius-34">{derecha}</div>
   </div> 
)
export default PlantillaGenerica;