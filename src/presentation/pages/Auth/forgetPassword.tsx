import { RichText } from "@/presentation/components/ui/atom/typography";
import { OlvideContraseñaForm } from "@/presentation/components/ui/organism/form";
import { AuthTemplate } from "@/presentation/components/ui/template";

export function OlvidarContraseña(): JSX.Element {
  return (
    <AuthTemplate
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
          className="font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-br from-typography-first to-text"
        />
      }
      formulario={<OlvideContraseñaForm />}
    />
  );
}
