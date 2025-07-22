import { Field, Formik } from "formik";
import { crearEmpresaInitialValues } from "./crearEmpresaInitialValues";
import { crearEmpresaValidationSchema } from "./crearEmpresaValidationShema";
import { ButtonAtom } from "../../../../atomos/button/ButtonAtom";

import { useNavigate } from "react-router-dom";
import { InputFiled } from "@/presentacion/components/ui/atomos";
import { createBusinessUseCase } from "@/domain";

export function CrearEmpresaForm(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <Formik
        initialValues={crearEmpresaInitialValues}
        validationSchema={crearEmpresaValidationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await createBusinessUseCase(values);
            navigate("/Inicio");
            console.log("Valores del formulario:", values);
          } catch (error) {
            console.error("Error al crear la empresa:", error);
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="space-y-6 px-4 lg:px-12">
            <div className="flex flex-row gap-12">
              <Field
                nombre="nameBusiness"
                label="Nombre de la empresa"
                component={InputFiled}
                isRequired
                maxLength={50}
                minLength={3}
              />
              <Field
                nombre="nit"
                label="NIT o identificación fiscal"
                component={InputFiled}
                isRequired
                maxLength={12}
              />
            </div>
            <div className="flex flex-row gap-12">
              <Field
                nombre="phoneBusiness"
                label="Télefono de contacto"
                component={InputFiled}
                isRequired
                maxLength={10}
              />
              <Field
                nombre="addressBusiness"
                label="Dirección principal"
                component={InputFiled}
                isRequired
                maxLength={100}
              />
            </div>
            <div className="flex flex-row gap-12">
              <Field
                nombre="emailBusiness"
                label="Correo electrónico de la empresa"
                component={InputFiled}
                isRequired
                maxLength={50}
              />
              <Field
                nombre="category"
                label="Cagtegoría"
                component={InputFiled}
                isRequired
                maxLength={3}
                minLength={1}
              />
            </div>
            <div className="flex justify-end py-7">
              <ButtonAtom
                texto="Guardar"
                text=" text-lg"
                className="w-1/6"
                disabled={
                  isSubmitting ||
                  !isValid ||
                  !values.nameBusiness ||
                  !values.nit ||
                  !values.phoneBusiness ||
                  !values.addressBusiness ||
                  !values.emailBusiness ||
                  !values.category
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
