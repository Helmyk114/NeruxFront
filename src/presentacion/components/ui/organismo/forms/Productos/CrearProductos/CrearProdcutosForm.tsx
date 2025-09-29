import { useMemo } from "react";
import { Formik } from "formik";
import { BackButton, ButtonAtom } from "@/presentacion/components/ui/atomos";
import { ProductosFormfields } from "@/presentacion/components/ui/moleculas";
import { productoConfig } from "@/presentacion/config";
import { Producto } from "@/domain/interface";

interface CrearProductoFormProps {
  createCategoria?: () => void;
  createProveedor?: () => void;
  onSuccess?: () => void;
  reload?: boolean;
  isEditing: boolean;
  idProduct: string | number | undefined;
  data: Producto | null;
}
export function CrearProductoFormComponent({
  onSuccess,
  createCategoria,
  createProveedor,
  //reload,
  isEditing,
  data,
}: CrearProductoFormProps): JSX.Element {
  // const { data: supplier } = useFetchAll<Proveedor>(
  //   () => proveedoresUseCase.getAll("/supplier/select"),
  //   { enable: true, reload }
  // );


  // const { data: unit } = useFetchAll<Unit>(
  //   () => masterUseCase.getAllUnits("/unit"),
  //   { enable: true, reload }
  // );

  // const supplierOptions = supplier.map((item) => ({
  //   key: item.id,
  //   label: item.name,
  // }));

  // const unitOptions = unit.map((item) => ({
  //   key: item.id,
  //   label: item.name,
  // }));
console.log('data', data)
  const initialValue = useMemo(() => {
    if (isEditing && data) {
      return {
        name: data.name,
        sku: data.sku,
        category: data?.category,
        salePrice: data.salePrice,
        alert: data.alert,
        minStock: data.minStock,
        supplier: data?.supplier,
        description: data.description,
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
            const newValues = {
              ...values,
              category: Number(values.category) ,
              salePrice: Number(values.salePrice),
              supplier: Number(values.supplier),
              minStock: values.alert ? Number(values.minStock) : 1,
            };

            console.log("newValues", newValues);

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
                // supplierOptions={supplierOptions}
                // categoryOptions={supplierOptions}
                //unitOptions={unitOptions}
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
