import { useCategoriaProveedorMaster, useProductoCreate } from "@/app/hook";
import { productoConfig } from "@/presentation/config/form";
import { ProductoDetailUi } from "@/presentation/models";
import { Formik } from "formik";
import { useMemo } from "react";
import { ProductosFormfields } from "../../../molecule/form";
import { BackButton, ButtonAtom } from "../../../atom/form/button";

interface ProductoFormProps {
  createCategoria?: () => void;
  createProveedor?: () => void;
  onSuccess?: () => void;
  reload?: boolean;
  isEditing: boolean;
  idProduct: string | number | undefined;
  data: ProductoDetailUi | null;
}
export function ProductoFormComponent({
  onSuccess,
  createCategoria,
  createProveedor,
  reload,
  isEditing,
  data,
}: ProductoFormProps): JSX.Element {
  const { categorias, proveedores } = useCategoriaProveedorMaster(true, reload);
  const { mutate: create } = useProductoCreate();

  const initialValue = useMemo(() => {
    if (isEditing && data) {
      return {
        name: data.name,
        sku: data.sku,
        categoria: "",
        salePrice: data.salePrice,
        alerta: true,
        minStock: 0,
        proveedor: "",
        description: "",
      };
    }
    return productoConfig.initialValues;
  }, [isEditing, data]);

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValue}
        validationSchema={productoConfig.validationSchema}
        validateOnMount
        // skipcq: JS-0417
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            if (isEditing) {
              console.log("Editando producto, no implementado");
              return;
            } else {
              await create(values);
            }

            if (onSuccess) onSuccess();
            resetForm();
          } catch (error) {
            console.error("Error al crear la empresa:", error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isValid, handleSubmit, dirty, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 p-4 gap-4">
              <ProductosFormfields
                crearCategoria={createCategoria}
                crearProveedor={createProveedor}
                supplierOptions={proveedores}
                categoryOptions={categorias}
              />

              <div className="flex flex-row justify-end gap-9 ">
                <BackButton texto="Atrás" className="w-1/6" />
                <ButtonAtom
                  texto={isEditing ? "Editar" : "Crear"}
                  text="text-md"
                  className="w-1/6"
                  disabled={!isValid || !dirty || isSubmitting}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
