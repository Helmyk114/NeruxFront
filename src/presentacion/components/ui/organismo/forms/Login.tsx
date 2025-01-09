import { Formik } from "formik";
import InputPassword from "../../atomos/form/InputPassword";
import InputFiled from "../../atomos/form/Input";

export default function LoginForm(): JSX.Element {
  const initialValues = {
    usuario: "",
    password: "",
  };

  return (
    <>
      <h1>Inicio de sesión</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={""}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Submitting", values);
          setSubmitting(false);
        }}
      >
        {({}) => (
          <form>
            <InputFiled />
            <InputPassword />
          </form>
        )}
      </Formik>
    </>
  );
}
