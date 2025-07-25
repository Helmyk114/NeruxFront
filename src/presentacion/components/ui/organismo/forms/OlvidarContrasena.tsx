import { Field, Formik } from "formik";
import { Title1 } from "../../atomos/textos/titles/level1";
import { olvideContraseñaValidation } from "../../../../../shared/validations/OlvidarContraseñaValidation";
import { InputFiled } from "../../atomos/form/Input";
import { ButtonAtom } from "../../atomos/button/ButtonAtom";


export function OlvideContraseñaForm(): JSX.Element {
 const initialValues = {
    email: "",
  }; 

  return (
    <div className="w-full">
      <Title1
        clasname="mb-[58px] text-center"
        titulo="Recupera tu contraseña"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={olvideContraseñaValidation}
        onSubmit={async (values, { setSubmitting }) => {
          //const result = await handleLoginValidation(values);
          const email = values.email;
          console.log(email);

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                nombre="email"
                label="Correo electrónico"
                component={InputFiled}
                isRequired={true}
                className="w-3/5 mx-auto"
              />
            </div>
            <div className="flex justify-center mt-6">
              <ButtonAtom
                texto="Enviar"
                text="white text-lg"
                className="w-3/5"
                disabled={isSubmitting || !isValid || !values.email}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
