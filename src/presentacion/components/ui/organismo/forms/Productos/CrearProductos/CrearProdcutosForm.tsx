import { Formik } from "formik";
import { categoriasUseCase, Category, productUseCase, Proveedor, proveedoresUseCase } from "@/domain";
import { BackButton, ButtonAtom } from "@/presentacion/components/ui/atomos";
import { ProductosFormfields } from "@/presentacion/components/ui/moleculas";
import { productoConfig } from "@/presentacion/config";
import { useFetchAll } from "@/presentacion/components/hook";

interface CrearProductoFormProps {
  createCategoria?: () => void;
  createProveedor?: () => void;
  onSuccess?: () => void;
  reload?: boolean;
}
export function CrearProductoFormComponent({
  onSuccess,
  createCategoria,
  createProveedor,
  reload
}: CrearProductoFormProps): JSX.Element {
  const { data: supplier } = useFetchAll<Proveedor>(
    () => proveedoresUseCase.getAll("/supplier"),
    { enable: true, reload }
  );
  const { data: category } = useFetchAll<Category>(
    () => categoriasUseCase.getAll("/category"),
    { enable: true, reload }
  );

  const supplierOptions = supplier.map((item) => ({
    key: item.id,
    label: item.name,
  }));
  const categoryOptions = category.map((item) => ({
    key: item.id,
    label: item.name,
  }));

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
                supplierOptions={supplierOptions}
                categoryOptions={categoryOptions}
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
