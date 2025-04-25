import { Field, Formik } from "formik";
import InputFiled from "../../../../atomos/form/Input";
import ButtonAtom from "../../../../atomos/ButtonAtom";
import { CrearProductosInitialValues } from "./crearProductoInitialValues";

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
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
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
            </div>
            <div>
              <Field
                nombre="totalAmount"
                label="Cantidad total"
                component={InputFiled}
                isRequired={true}
                type="number"
                className="w-3/5 mx-auto"
              />
            </div>
            <div>
              <Field
                nombre="currentAmount"
                label="Cantidad actual"
                component={InputFiled}
                isRequired={true}
                type="number"
                className="w-3/5 mx-auto"
              />
            </div>
            <div>
              <Field
                nombre="productionPrice"
                label="Precio de producción"
                component={InputFiled}
                isRequired={true}
                type="number"
                className="w-3/5 mx-auto"
              />
            </div>
            <div>
              <Field
                nombre="salePrice"
                label="Precio de venta"
                component={InputFiled}
                isRequired={true}
                type="number"
                className="w-3/5 mx-auto"
              />
            </div>
            <div>
              <Field
                nombre="category"
                label="Categoría"
                component={InputFiled}
                isRequired={true}
                className="w-3/5 mx-auto"
              />
            </div>
            <div className="flex justify-center mt-6">
              <ButtonAtom
                texto="Crear"
                text="white text-lg"
                className="w-3/5"
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
