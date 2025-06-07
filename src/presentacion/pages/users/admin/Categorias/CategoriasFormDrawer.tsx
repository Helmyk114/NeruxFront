import { useMemo } from "react";
import { Formik } from "formik";
import { DrawerWrapper } from "../../../../components/ui/organismo/forms/Drawer";
import { Category } from "../../../../../domain/entities/category";
import { categoriasConfig } from "../../../../components/ui/organismo/forms/Categorias/categoriasConfig";
import { CategoriasForm } from "../../../../components/ui/organismo/forms/Categorias/CategoriasForm";
import { Title3 } from "../../../../components/ui/atomos/textos/titles/level3";
import { ButtonCancel } from "../../../../components/ui/atomos/button/ButtonCancel";
import { categoriasUseCase } from "../../../../../domain/usecases/inventario/categoria/categoria.useCase";
import { useItemFetch } from "../../../../components/hook";
import { ButtonAtom } from "../../../../components/ui/atomos/button/ButtonAtom";

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

  const shouldFetchData = mode === "editar" && !!id && isOpen;

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

  if (loading && mode === "editar") return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!isReady) return null;

  return (
    <Formik
      initialValues={initialValue}
      enableReinitialize={true}
      validationSchema={categoriasConfig.validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          if(mode === "crear"){
            await categoriasUseCase.create("/create-category", values);
          } else {
            await categoriasUseCase.update("/category", Number(id), values)
          }
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
            onClose();
            onSuccess?.();
          }, 800);
        } catch (error) {
          if(mode === "crear") {
            console.error("Error al crear la categoría:", error);
          } else {
            console.error("Error al actualizar la categoría:", error);
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
                clasname="mt-6"
              />
            }
            body={<CategoriasForm />}
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
