import { useRedirect } from "@/presentation/components/hook";
import { Formik } from "formik";
import { ModalTemplate } from "../../../template";
import { IconLockPassword } from "@tabler/icons-react";
import { Title1 } from "../../../atom/typography";
import { InputOtpAtom } from "../../../atom/form/input";
import { ButtonAtom } from "../../../atom/form/button";
import { validateOtpConfig } from "@/presentation/config/form";
import { useValidateOtp } from "@/app/hook";

interface OtpVerificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export function OtpVerificationModal({
  isOpen,
  onClose,
  email,
}: OtpVerificateModalProps): JSX.Element {
  const { mutate: validateOtp } = useValidateOtp();
  const redirect = useRedirect();

  return (
    <Formik
      initialValues={validateOtpConfig.initialValues}
      validationSchema={validateOtpConfig.validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const res = await validateOtp({ code: values.code, email });
        if (res) {
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
          <ModalTemplate
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
                <InputOtpAtom
                  value={values.code}
                  length={6}
                  onValueChange={(value) => setFieldValue("code", value)}
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
