import { Field, Formik } from "formik";
import InputPassword from "../../atomos/form/InputPassword";
import { OlvidarContraseñaValidationSchema } from "../../../../../utils/validations/olvidarContraseñaValidationSchema";
import ButtonAtom from "../../atomos/ButtonAtom";


import { useNavigate } from "react-router-dom";

export default function OlvidarContraseñaForm(): JSX.Element {
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };

  
  const navigate = useNavigate();

  return (
    <div className="p-10 mt-10 w-full ml-4 justify-center">
      <h1 className="text-2xl font-bold mb-16 text-center">Configura tu nueva contraseña</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={OlvidarContraseñaValidationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          //const result = await handleLoginValidation(values);
        //   const newUser = await loginUseCase.execute(
        //     values.newPassword,
        //     values. confirmPassword
        //   );
        //   if (newUser.user.has_changed_password === 1) {
        //     navigate("/Nueva/Contraseña");
        //   } else {
        //     navigate("/clientes");
        //   }
          // if (result.error) {
          //   setErrors({ username: result.message, password: result.message });
          // }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit}) => (
          <form
            className="space-y-4 items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className=" mb-12 justify-center items-center">
              <Field
                nombre="Nueva password"
                label="Nueva contraseña"
                component={InputPassword}
                className="w-9/12 mx-auto mb-2"
                
              />
            </div>
            <div className="">
              <Field
                nombre="confirm password"
                label="Repetir contraseña"
                component={InputPassword}
                className="w-9/12 mx-auto mb-2"
              />
            </div>
            <div className="">
            <ButtonAtom
              text="Enviar"
              textColor="white"
              className="w-9/12 ml-16 mt-2"
              disabled={
                isSubmitting || !isValid || !values.newPassword || !values.confirmPassword
              }
            />
            </div>
         
           
          </form>
        )}
      </Formik>
    </div>
  );
}