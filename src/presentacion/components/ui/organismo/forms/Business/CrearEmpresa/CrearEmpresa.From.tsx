import { Formik } from "formik";
import { ButtonAtom } from "../../../../atomos/button/ButtonAtom";
import { useNavigate } from "react-router-dom";
import { createBusinessUseCase } from "@/domain";
import { crearEmpresaConfig } from "@/presentacion/config/forms/crearEmpresa.Config";
import { CrearEmpresaFormFields } from "@/presentacion/components/ui/moleculas";

export function CrearEmpresaForm(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <Formik
        initialValues={crearEmpresaConfig.initialValues}
        validationSchema={crearEmpresaConfig.validationSchema}
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
            <CrearEmpresaFormFields />
            <div className="flex justify-end py-7">
              <ButtonAtom
                texto="Guardar"
                text=" text-lg"
                className="w-1/6"
                disabled={
                  isSubmitting ||
                  !isValid ||
                  !values.name ||
                  !values.nit ||
                  !values.phone ||
                  !values.address ||
                  !values.email
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
