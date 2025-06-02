import { useState } from "react";
import { Field, Formik } from "formik";
import InputFiled from "../../../../atomos/form/Input";
import ButtonAtom from "../../../../atomos/button/ButtonAtom";
import { BackButton } from "../../../../atomos/button/ButtonBack";

import { productUseCase } from "../../../../../../../domain/usecases/product/productUseCase";
import ImageUpload from "../../../../atomos/form/InputFile";
import { createProductConfig } from "./createProductConfig";

interface CrearProductoFormProps {
  onSuccess?: () => void;
}
export function CrearProductoFormComponent({
  onSuccess,
}: CrearProductoFormProps): JSX.Element {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <div className="w-full">
      <Formik
        initialValues={createProductConfig.initialValues}
        validationSchema={createProductConfig.validationSchema}
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
        {({ isSubmitting, setFieldValue, isValid, values, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="mt-2 px-4 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
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
                  className="row-span-1"
                  type="number"
                />

                <Field
                  nombre="currentAmount"
                  label="Cantidad actual"
                  component={InputFiled}
                  isRequired={true}
                  className="row-span-1"
                  type="number"
                />

                <Field
                  nombre="productionPrice"
                  label="Precio de producción"
                  component={InputFiled}
                  className="row-span-1"
                  type="number"
                />

                <Field
                  nombre="salePrice"
                  label="Precio de venta"
                  component={InputFiled}
                  isRequired={true}
                  className="row-span-1"
                  type="number"
                />
              </div>
              <div className="flex flex-col gap-6">
                <Field
                  nombre="category"
                  label="Categoría"
                  component={InputFiled}
                  isRequired={true}
                  type="number"
                />
                <Field
                  name="image"
                  component={ImageUpload}
                  setFieldValue={setFieldValue}
                  previewUrl={previewUrl}
                  setPreviewUrl={setPreviewUrl}
                />
              </div>
            </div>

            <div className="flex justify-between mt-9 mb-6">
              <BackButton texto="Atrás" className="w-1/6" />

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
