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
    <>
      <h1>Inicio de sesión</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Submitting", values);
          setSubmitting(false);
        }}
      >
        {({}) => (
          <form>
            <InputFiled name="username" label="Usuario" 
            className="w-full"/>
            <InputPassword />
            <ButtonAtom
            text="Entrar"
            textColor= "white"
            className="w-full"
            />
          </form>
        )}
      </Formik>
    </>
  );
}
