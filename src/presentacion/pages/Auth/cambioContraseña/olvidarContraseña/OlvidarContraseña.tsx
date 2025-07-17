
import { PlantillaGenerica } from "@/presentacion/components/ui/template";
import OlvideContraseñaForm from "../../../../components/ui/organismo/forms/OlvideContraseña/OlvidarContrasena";
import { TextoInicio } from "@/presentacion/components/ui/atomos";
import React from "react";
import InputsOtp from "@/presentacion/components/ui/atomos/form/InputOtp";



export function OlvidarContraseña(): JSX.Element {
  const [value, setValue] = React.useState("");
  return (
      <>

    <PlantillaGenerica
      texto={
        <TextoInicio
          spans={[
            {
              texto: "¡NO TE PREOCUPES\n A TODOS NOS PASA!\n",
              className: "font-bold text-3xl lg:text-4xl",
            },
            {
              texto:
                "Ingresa tu correo electrónico para\n que podamos ayudarte a restablecer\n tu contraseña.",
              className: "italic 2xl lg:text-2xl",
            },
          ]}
          className="font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
        />
      }
      formulario={<OlvideContraseñaForm />}
 
    />
     <InputsOtp value={value} length={6}  size="lg" color="default" variant="bordered" onValueChange={setValue}/>
  </>
  );
 
}
