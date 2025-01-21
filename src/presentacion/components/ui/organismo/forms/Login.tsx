import { Formik } from "formik";
import InputPassword from "../../atomos/form/InputPassword";
import InputFiled from "../../atomos/form/Input";
import { loginValidationSchema } from "../../../../../utils/validations/loginValidationSchema";
import ButtonAtom from "../../atomos/ButtonAtom";


export default function LoginForm(): JSX.Element {
  const initialValues = {
    username: "",
    password: "",
  };

  return (

 <div className=" p-8 rounded h-full w-full shadow-md ">
    <h1 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submitting", values);
        setSubmitting(false);
      }}
    >
      {() => (
        <form className="space-y-4  justify-center">
          <InputFiled name="username" label="Usuario" className="w-9/12 justify-center mb-10" />
          <InputPassword className="w-9/12"/>
          <div className="flex justify-end items-center">
            <a href="/olvidarContraseña" className="text-blue-500 text-base underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <ButtonAtom text="Iniciar sesión" textColor="white" className="w-9/12"
          disabled={true}
         />
        </form>
      )}
    </Formik>
  </div>
  
  
  );
}
