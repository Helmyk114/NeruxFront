import { Formik } from "formik";
import { categoriasConfig } from "./categoriasConfig";
import ButtonAtom from "../../../atomos/button/ButtonAtom";
import { DrawerWrapper } from "../Drawer";
import { Title3 } from "../../../atomos/textos/titles/level3";
import { CategoriasForm } from "./CategoriasForm";
import { ButtonCancel } from "../../../atomos/button/ButtonCancel";

interface CategoriasFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CategoriasFormDrawer({
  isOpen,
  onClose,
}: CategoriasFormDrawerProps): JSX.Element {
  return (
    <Formik
      initialValues={categoriasConfig.initialValues}
      validationSchema={categoriasConfig.validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Formulario enviado:", values);
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          onClose();
        }, 800);
      }}
    >
      {({ isSubmitting, isValid, handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <DrawerWrapper
            isOpen={isOpen}
            onClose={onClose}
            isDimissable={false}
            header={<Title3 titulo="Crear nueva categoría" clasname="mt-6" />}
            body={<CategoriasForm />}
            footer={
              <div className="flex justify-between gap-5">
                <ButtonCancel onClose={onClose} className="w-[190px]" />
                <ButtonAtom
                  texto="Guardar categoría"
                  onClick={() => handleSubmit()}
                  text="white text-md"
                  className="w-[190px]"
                  disabled={
                    isSubmitting ||
                    !isValid ||
                    !values.name ||
                    !values.description
                  }
                />
              </div>
            }
          />
        </form>
      )}
    </Formik>
  );
}
