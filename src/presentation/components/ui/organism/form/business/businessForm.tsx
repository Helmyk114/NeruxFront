import { useRedirect } from "@/presentation/components/hook";
import { crearEmpresaConfig } from "@/presentation/config/form";
import { Formik } from "formik";
import { EmpresaFormFields } from "../../../molecule/form";
import { ButtonAtom } from "../../../atom/form/button";
import { useCreateBusiness } from "@/app/hook";

export function EmpresaForm(): JSX.Element {
  const navigate = useRedirect();
  const { mutate: create } = useCreateBusiness(() => navigate("/Inicio"));

  return (
    <div className="w-full">
      <Formik
        initialValues={crearEmpresaConfig.initialValues}
        validationSchema={crearEmpresaConfig.validationSchema}
        // skipcq: JS-0417
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await create(values);
          } catch (error) {
            console.error("Error al crear la empresa:", error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isValid, handleSubmit, dirty, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="space-y-6 px-4 lg:px-12">
            <EmpresaFormFields />
            <div className="flex justify-end py-7">
              <ButtonAtom
                texto="Guardar"
                text=" text-lg"
                className="w-1/6"
                disabled={!isValid || !dirty || isSubmitting}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
