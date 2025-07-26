import { useMemo } from "react";
import { Formik } from "formik";
import { useItemFetch } from "@/presentacion/components/hook";
import { categoriasConfig } from "@/presentacion/config";
import { DrawerWrapper } from "@/presentacion/components/ui/organismo";
import {
  ButtonAtom,
  ButtonCancel,
  Title3,
} from "@/presentacion/components/ui/atomos";
import { CategoriasFormFields } from "@/presentacion/components/ui/moleculas";
import { categoriasUseCase, Category } from "@/domain";
import { toastStore } from "@/store";
import { Spinner } from "@heroui/react";

interface CategoriasFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  id: string | number | null;
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
  } = useItemFetch<Category>(
    async (id) => {
      const data = await categoriasUseCase.getById("/category", id);
      return { data };
    },
    {
      byId: shouldFetchData ? id : null,
      enable: shouldFetchData,
      reload: isOpen,
    }
  );

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
      enableReinitialize
      validationSchema={categoriasConfig.validationSchema}
      // skipcq: JS-0417
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          if (mode === "crear") {
            await categoriasUseCase.create("/create-category", values);
            newToast({
              mensaje: "Categoría creada exitosamente",
              tipo: "success",
            });
          } else {
            await categoriasUseCase.update("/category", Number(id), values);
            newToast({
              mensaje: "Categoría actualizada exitosamente",
              tipo: "success",
            });
          }
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
            onClose();
            onSuccess?.();
          }, 800);
        } catch (error) {
          if (mode === "crear") {
            newToast({
              mensaje:
                mode === "crear"
                  ? "Error al crear la categoría"
                  : "Error al actualizar la categoría",
              tipo: "error",
            });
          } else {
            newToast({
              mensaje: "Ocurrio un error",
              tipo: "error",
            });
          }
          throw error;
        }
      }}
    >
      {({ isSubmitting, isValid, handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <DrawerWrapper
            isOpen={isOpen}
            onClose={onClose}
            isDimissable={false}
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
              mode ==='editar' && loading ? (
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
              <div className="flex justify-between gap-5">
                <ButtonCancel onClose={onClose} className="w-[190px]" />
                <ButtonAtom
                  onClick={() => handleSubmit()}
                  texto={
                    mode === "crear"
                      ? "Guardar categoría"
                      : "Actualizar categoría"
                  }
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
