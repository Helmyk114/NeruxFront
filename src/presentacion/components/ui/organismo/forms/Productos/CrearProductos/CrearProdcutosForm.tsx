import { Field, Formik } from "formik";
import InputFiled from "../../../../atomos/form/Input";
import ButtonAtom from "../../../../atomos/button/ButtonAtom";
import { CrearProductosInitialValues } from "./crearProductoInitialValues";
import { BackButton } from "../../../../atomos/button/ButtonBack";

export function CrearProductoForm() {
  return (
    <div className="w-full">
      <Formik
        initialValues={CrearProductosInitialValues}
        validationSchema={""}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="mt-2 px-4 lg:px-12">
            <div className="flex justify-between gap-8">
              <div className="flex-1 space-y-6">
                <Field
                  nombre="nameProduct"
                  label="Nombre del producto"
                  component={InputFiled}
                  isRequired={true}
                />

                <Field
                  nombre="sku"
                  label="SKU o código de referencia"
                  component={InputFiled}
                  isRequired={true}
                />

                <Field
                  nombre="totalAmount"
                  label="Cantidad total"
                  component={InputFiled}
                  isRequired={true}
                  type="number"
                />

                <Field
                  nombre="currentAmount"
                  label="Cantidad actual"
                  component={InputFiled}
                  isRequired={true}
                  type="number"
                />

                <Field
                  nombre="productionPrice"
                  label="Precio de producción"
                  component={InputFiled}
                  isRequired={true}
                  type="number"
                />

                <Field
                  nombre="salePrice"
                  label="Precio de venta"
                  component={InputFiled}
                  isRequired={true}
                  type="number"
                />
              </div>
              <div className="flex-1 space-y-6">
                <Field
                  nombre="category"
                  label="Categoría"
                  component={InputFiled}
                  isRequired={true}
                />
              </div>
            </div>
            <div className="flex justify-between mt-9 mb-6">
              <BackButton
                texto="Atrás"
                className="w-1/6"
               />
              
              <ButtonAtom
                texto="Crear"
                text="white text-md"
                className="w-1/6"
                disabled={
                  isSubmitting ||
                  !isValid ||
                  !values.category ||
                  !values.nameProduct ||
                  !values.sku ||
                  !values.totalAmount ||
                  !values.currentAmount ||
                  !values.productionPrice ||
                  !values.salePrice
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
