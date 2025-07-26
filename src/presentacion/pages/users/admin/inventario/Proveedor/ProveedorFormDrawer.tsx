import { useMemo } from "react";
import { Formik } from "formik";
import { useItemFetch } from "@/presentacion/components/hook";
import { proveedorConfig } from "@/presentacion/config";
import { toastStore } from "@/store/toastStore";
import { Proveedor, proveedoresUseCase } from "@/domain";
import {
  ButtonAtom,
  ButtonCancel,
  DrawerWrapper,
  ProveedorFormFields,
  Title3,
} from "@/presentacion/components/ui";
import { Spinner } from "@heroui/react";

interface ProveedorFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  id: string | number | null;
  mode: "crear" | "editar";
}

export function ProveedorFormDrawer({
  isOpen,
  onClose,
  onSuccess,
  id,
  mode,
}: ProveedorFormDrawerProps): JSX.Element | null {
  const shouldFetchData = mode === "editar" && Boolean(id) && isOpen;
  const newToast = toastStore((state) => state.newToast);

  const {
    data: proveedor,
    loading,
    error,
  } = useItemFetch<Proveedor>(
    async (id) => {
      const data = await proveedoresUseCase.getById("/supplier", id);
      return { data };
    },
    {
      byId: shouldFetchData ? id : null,
      enable: shouldFetchData,
      reload: isOpen,
    }
  );

  const initialValue = useMemo(() => {
    if (mode === "editar" && proveedor) {
      return {
        name: proveedor.name,
        supplier: proveedor.supplier,
        email: proveedor.email,
        phone: proveedor.phone,
        note: proveedor.note,
      };
    }
    return proveedorConfig.intiatialValues;
  }, [mode, proveedor]);

  const isReady = mode === "crear" || (mode === "editar" && proveedor);

  if (!isReady) return null;

  return (
    <Formik
      initialValues={initialValue}
      enableReinitialize
      validationSchema={proveedorConfig.validationSchema}
      // skipcq: JS-0417
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          if (mode === "crear") {
            await proveedoresUseCase.create("/create-supplier", values);
            newToast({
              mensaje: "Proveedor creado exitosamente",
              tipo: "success",
            });
          } else {
            await proveedoresUseCase.update("/supplier", Number(id), values);
            newToast({
              mensaje: "Proveedor actualizado correctamente",
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
                  ? "Error al crear el proveedor"
                  : "Error al actualizar el proveedor",
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
                    ? "Crear un nuevo proveedor"
                    : "Editar proveedor"
                }
                classname="mt-6"
              />
            }
            body={
              mode === 'editar' && loading ? (
                <div>
                  <Spinner title="Cargando..." />
                </div>
              ) : error ? (
                <div>Error: {"No se encontró la categoría"}</div>
              ) : (
                <ProveedorFormFields />
              )
            }
            footer={
              <div className="flex justify-between gap-5">
                <ButtonCancel onClose={onClose} className="w-[190px]" />
                <ButtonAtom
                  onClick={() => handleSubmit()}
                  texto={
                    mode === "crear"
                      ? "Guardar proveedor"
                      : "Actualizar proveedor"
                  }
                  className="w-[190px]"
                  disabled={
                    isSubmitting || !isValid || !values.name || !values.phone
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
