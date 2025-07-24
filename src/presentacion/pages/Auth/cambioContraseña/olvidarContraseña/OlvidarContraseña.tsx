import {
  OlvideContraseñaForm,
  PlantillaGenerica,
  RichText,
} from "@/presentacion/components/ui";

export function OlvidarContraseña(): JSX.Element {
  return (
    <PlantillaGenerica
      texto={
        <RichText
          segments={[
            {
              text: "¡NO TE PREOCUPES\n A TODOS NOS PASA!\n",
              className: "font-bold text-3xl lg:text-4xl",
            },
            {
              text: "Ingresa tu correo electrónico para\n que podamos ayudarte a restablecer\n tu contraseña.",
              className: "italic 2xl lg:text-2xl",
            },
          ]}
          className="font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
        />
      }
      formulario={<OlvideContraseñaForm />}
    />
  );
}
