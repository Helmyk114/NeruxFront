import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Field, Formik, FormikHelpers } from "formik";
import InputFiled from "../../../../atomos/form/Input";
import ButtonAtom from "../../../../atomos/button/ButtonAtom";
import { CrearProductosInitialValues } from "./crearProductoInitialValues";
import { BackButton } from "../../../../atomos/button/ButtonBack";
import { CrearProductosValues } from "./crearProductosTypes";
import { crearProductoValidation } from "./crearProductoValidationSchema";
import { productUseCase } from "../../../../../../../domain/usecases/product/productUseCase";

export interface CrearProductoFormHandles {
  resetForm: () => void;
}

interface CrearProductoFormProps {
  onSuccess?: () => void;
}
export function CrearProductoFormComponent(
  { onSuccess }: CrearProductoFormProps,
  ref: React.Ref<CrearProductoFormHandles>
): JSX.Element {
  const formikRef = useRef<FormikHelpers<CrearProductosValues> | null>(null);

  useImperativeHandle(ref, () => ({
    resetForm: () => {
      formikRef.current?.resetForm();
    },
  }));

  return (
    <div className="w-full">
      <Formik
        initialValues={CrearProductosInitialValues}
        validationSchema={crearProductoValidation}
        onSubmit={async (values, helpers) => {
          try {
            await productUseCase.createProduct(values)
            formikRef.current = helpers;
            if (onSuccess) onSuccess();
            helpers.setSubmitting(false);
          } catch (error) {
            console.error("Error al crear la empresa:", error);
          }
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
                  type="number"
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

export const CrearProductoForm = forwardRef(CrearProductoFormComponent);
