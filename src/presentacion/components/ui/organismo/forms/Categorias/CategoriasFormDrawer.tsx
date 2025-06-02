import { Formik } from "formik";
import { categoriasConfig } from "./categoriasConfig";
import ButtonAtom from "../../../atomos/button/ButtonAtom";
import { DrawerWrapper } from "../Drawer";
import { Title3 } from "../../../atomos/textos/titles/level3";
import { CategoriasForm } from "./CategoriasForm";
import { ButtonCancel } from "../../../atomos/button/ButtonCancel";
import { categoriasUseCase } from "../../../../../../domain/usecases/inventario/categoria/categoria.useCase";

interface CategoriasFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function CategoriasFormDrawer({
  isOpen,
  onClose,
  onSuccess
}: CategoriasFormDrawerProps): JSX.Element {
  return (
    <Formik
      initialValues={categoriasConfig.initialValues}
      validationSchema={categoriasConfig.validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await categoriasUseCase.create(values);
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
            onClose();
            onSuccess?.();
          }, 800);
        } catch (error) {
          console.error("Error al crear la empresa:", error);
        }
     
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
