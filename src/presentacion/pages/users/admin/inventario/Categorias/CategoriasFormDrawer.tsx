import { useMemo } from "react";
import { Formik } from "formik";
import { categoriasConfig } from "@/presentacion/config";
import { DrawerWrapper } from "@/presentacion/components/ui/organismo";
import {
  ButtonAtom,
  ButtonCancel,
  Title3,
} from "@/presentacion/components/ui/atomos";
import { CategoriasFormFields } from "@/presentacion/components/ui/moleculas";
import { toastStore } from "@/store";
import { Spinner } from "@heroui/react";
import {
  useCategoriaById,
  useCreateCategoria,
  useUpdateCategoria,
} from "@/presentacion/components/hook";

interface CategoriasFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  id: string | null;
  mode: "crear" | "editar";
}

export function CategoriasFormDrawer({
  isOpen,
  onClose,
  onSuccess,
  id,
  mode,
}: CategoriasFormDrawerProps): JSX.Element | null {
  const shouldFetchData = mode === "editar" && Boolean(id) && isOpen;
  const newToast = toastStore((state) => state.newToast);

  const {
    data: categoria,
    loading,
    error,
  } = useCategoriaById(shouldFetchData ? id : null, shouldFetchData, isOpen);
  const { mutate: create } = useCreateCategoria();
  const { mutate: update } = useUpdateCategoria();

  const initialValue = useMemo(() => {
    if (mode === "editar" && categoria) {
      return {
        name: categoria.name,
        description: categoria.description,
      };
    }
    return categoriasConfig.initialValues;
  }, [mode, categoria]);

  const isReady = mode === "crear" || (mode === "editar" && categoria);

  if (!isReady) return null;

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={categoriasConfig.validationSchema}
      enableReinitialize
      validateOnMount
      // skipcq: JS-0417
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          if (mode === "crear") {
            await create(values);
          } else {
            await update({ id: id!, ...values });
          }
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
            onClose();
            onSuccess?.();
          }, 800);
        } catch {
          newToast({
            mensaje: "Ocurrio un error. Inténtalo más tarde.",
            tipo: "error",
          });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid, handleSubmit, dirty }) => (
        <form onSubmit={handleSubmit}>
          <DrawerWrapper
            isOpen={isOpen}
            onClose={onClose}
            isDimissable={false}
            footerClassName="flex justify-center items-center"
            header={
              <Title3
                titulo={
                  mode === "crear"
                    ? "Crear nueva categoría"
                    : "Editar categoría"
                }
                classname="mt-6"
              />
            }
            body={
              mode === "editar" && loading ? (
                <div>
                  <Spinner title="Cargando..." />
                </div>
              ) : error ? (
                <div>Error: {"No se encontró la categoría"}</div>
              ) : (
                <CategoriasFormFields />
              )
            }
            footer={
              <div className="flex gap-5">
                <ButtonCancel onClose={onClose} className="w-[190px]" />
                <ButtonAtom
                  onClick={() => handleSubmit()}
                  texto={
                    mode === "crear"
                      ? "Guardar categoría"
                      : "Actualizar categoría"
                  }
                  className="w-[190px]"
                  disabled={isSubmitting || !isValid || !dirty}
                />
              </div>
            }
          />
        </form>
      )}
    </Formik>
  );
}
