import { Formik } from "formik";
import { productUseCase } from "@/domain";
import { BackButton, ButtonAtom } from "@/presentacion/components/ui/atomos";
import { ProductosFormfields } from "@/presentacion/components/ui/moleculas";
import { productoConfig } from "@/presentacion/config";

interface CrearProductoFormProps {
  createCategoria?: () => void;
  createProveedor?: () => void;
  onSuccess?: () => void;
}
export function CrearProductoFormComponent({
  onSuccess,
  createCategoria,
  createProveedor,
}: CrearProductoFormProps): JSX.Element {
  return (
    <div className="w-full">
      <Formik
        initialValues={productoConfig.initialValues}
        validationSchema={productoConfig.validationSchema}
        validateOnMount
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await productUseCase.createProduct(values);
            if (onSuccess) onSuccess();
            resetForm();
            setSubmitting(false);
          } catch (error) {
            console.error("Error al crear la empresa:", error);
          }
        }}
      >
        {({ isValid, handleSubmit, dirty }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 p-4 gap-4">
              <ProductosFormfields
                crearCategoria={createCategoria}
                crearProveedor={createProveedor}
              />

              <div className="flex flex-row justify-end gap-9 ">
                <BackButton texto="Atrás" className="w-1/6" />
                <ButtonAtom
                  texto="Crear"
                  text="text-md"
                  className="w-1/6"
                  disabled={!isValid || !dirty}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
