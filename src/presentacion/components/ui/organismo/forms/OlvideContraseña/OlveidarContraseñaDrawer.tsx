import { IconLockPassword } from "@tabler/icons-react";
import { VentanaModal } from "../../modal";
import { ButtonAtom, Title1 } from "../../../atomos";
import { InputsOtp } from "../../../atomos/form/InputOtp";
import { Formik } from "formik";
import { useRedirect } from "@/presentacion/components/hook";
import { authUseCase } from "@/domain/auth/authUseCase";

interface OlvidarContraseDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export function OlvidarContraseDrawer({
  isOpen,
  onClose,
  email,
}: OlvidarContraseDrawerProps): JSX.Element {
  const redirect = useRedirect();

  return (
    <Formik
      initialValues={{ otp: "" }}
      validationSchema={""}
      onSubmit={async (values, { setSubmitting }) => {
        const resp = await authUseCase.validateOtp({ otp: values.otp, email });
        if (resp) {
          setSubmitting(false);
          onClose();
          redirect(`/Nueva/Contraseña?email=${email}`);
        }
      }}
    >
      {({
        values,
        setFieldValue,
        isSubmitting,
        handleSubmit,
        isValid,
        dirty,
      }) => (
        <form onSubmit={handleSubmit}>
          <VentanaModal
            onClose={onClose}
            size="md"
            isOpen={isOpen}
            isDimissable={false}
            hideCloseButton={false}
            header={
              <div className="flex flex-col items-center justify-center mt-[10px]">
                <IconLockPassword className="text-brand-first" size={80} />
                <Title1 titulo="Revisa tu correo" />
              </div>
            }
            body={
              <div className="flex flex-col items-center gap-5">
                <p className="text-sm text-center font-OpenSans">
                  Hemos enviado un código de verificación a tu correo
                  electrónico. Por favor, ingresa el código, para continuar con
                  el proceso de recuperación de tu contraseña.
                </p>
                <InputsOtp
                  value={values.otp}
                  length={6}
                  onValueChange={(value) => setFieldValue("otp", value)}
                  size="md"
                  variant="bordered"
                />
              </div>
            }
            footer={
              <ButtonAtom
                className="text-white mb-5 w-11/12 mx-auto"
                texto="Verificar"
                type="submit"
                size="lg"
                onClick={() => handleSubmit()}
                disabled={isSubmitting || !isValid || !dirty}
              />
            }
          />
        </form>
      )}
    </Formik>
  );
}
