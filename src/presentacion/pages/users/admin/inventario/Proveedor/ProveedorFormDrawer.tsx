import { useMemo } from "react";
import { Formik } from "formik";
import { proveedorConfig } from "@/presentacion/config";
import { toastStore } from "@/store/toastStore";
import {
  ButtonAtom,
  ButtonCancel,
  DrawerWrapper,
  ProveedorFormFields,
  Title3,
} from "@/presentacion/components/ui";
import { Spinner } from "@heroui/react";
import {
  useCreateProveedor,
  useProveedorById,
  useUpdateProveedor,
} from "@/presentacion/components/hook";

interface ProveedorFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  id: string | null;
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
  } = useProveedorById(shouldFetchData ? id : null, shouldFetchData, isOpen);
  const { mutate: create } = useCreateProveedor();
  const { mutate: update } = useUpdateProveedor();

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
      validationSchema={proveedorConfig.validationSchema}
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
      {({ isValid, handleSubmit, dirty }) => (
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
                    ? "Crear un nuevo proveedor"
                    : "Editar proveedor"
                }
                classname="mt-6"
              />
            }
            body={
              mode === "editar" && loading ? (
                //Crear componente reutilizable para el spinner
                <div>
                  <Spinner title="Cargando..." />
                </div>
              ) : error ? (
                //Crear componente reutilizable para el error
                <div>Error: {"No se encontró el proveedor"}</div>
              ) : (
                <ProveedorFormFields />
              )
            }
            footer={
              <div className="flex items-center justify-between gap-5">
                <ButtonCancel onClose={onClose} className="w-[190px]" />
                <ButtonAtom
                  onClick={() => handleSubmit()}
                  texto={
                    mode === "crear"
                      ? "Guardar proveedor"
                      : "Actualizar proveedor"
                  }
                  className="w-[190px]"
                  disabled={!isValid || !dirty}
                />
              </div>
            }
          />
        </form>
      )}
    </Formik>
  );
}
