import { useLogout } from "@/app/hook";
import { RichText } from "@/presentation/components/ui/atom/typography";
import { NewPasswordForm } from "@/presentation/components/ui/organism/form";
import { AuthTemplate } from "@/presentation/components/ui/template";
import { PopUpSuccess } from "@/shared/utils/popUps/success";
import { useDisclosure } from "@heroui/react";
import { useSearchParams } from "react-router-dom";

export function NuevaContraseña(): JSX.Element {
  const modal = useDisclosure();
  const logout = useLogout();
  const [searchParams] = useSearchParams();

  const email = searchParams.get("email");

  return (
    <>
      <AuthTemplate
        texto={
          <RichText
            segments={[
              {
                text: "¡VAMOS A CREAR TU\n NUEVA CONTRASEÑA!\n",
                className: "font-bold text-3xl lg:text-4xl",
              },
              {
                text: "Solo queda un paso más para\n completar el proceso.",
                className: "italic 2xl lg:text-2xl",
              },
            ]}
            className={
              "font-OpenSans whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-br from-typography-first to-text"
            }
          />
        }
        formulario={
          <NewPasswordForm onSuccess={modal.onOpen} email={email ?? ""} />
        }
      />

      <PopUpSuccess
        isOpen={modal.isOpen}
        onClose={modal.onClose}
        titulo="¡Listo! 🎉"
        startText="Tu contraseña ha sido restablecida correctamente.
                  Ahora puedes iniciar sesión con tu nueva contraseña."
        endText="¡Gracias por tu paciencia!"
        textButton="Iniciar sesión"
        onClick={logout}
      />
    </>
  );
}
