import {
  OlvideContraseñaForm,
  PlantillaGenerica,
  RichText,
} from "@/presentacion/components/ui";

export function RestablecerContraseña(): JSX.Element {
  return (
    <PlantillaGenerica
      texto={
        <RichText
          segments={[
            {
              text: "¡TU CONTRASEÑA!\n ANTERIOR HA SIDO\n RESTABLECIDA!\n",
              className: "font-bold text-3xl lg:text-4xl",
            },

            {
              text: "Por favor, establece una nueva\n contraseña para tu cuenta.",
              className: "italic 2xl lg:text-2xl",
            },
          ]}
          className="py-2 font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-grisFondo to-text"
        />
      }
      formulario={<OlvideContraseñaForm />}
    />
  );
}
