import { RichText } from "@/presentation/components/ui/atom/typography";
import { LoginForm } from "@/presentation/components/ui/organism/form/auth/loginForm";
import { AuthTemplate } from "@/presentation/components/ui/template";

export function Login(): JSX.Element {
  return (
    <AuthTemplate
      texto={
        <RichText
          segments={[
            {
              text: "BIENVENID@\n",
              className: "font-bold text-3xl lg:text-5xl",
            },
            {
              text: "¡Empieza tu viaje con\n nuestro ",
              className: "italic font-light text-2xl lg:text-4xl",
            },
            {
              text: "sistema de\n gestión!",
              className: "italic font-semibold text-4xl lg:text-4xl",
            },
          ]}
          className={
            "font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-br from-typography-first to-text"
          }
        />
      }
      formulario={<LoginForm />}
    />
  );
}
