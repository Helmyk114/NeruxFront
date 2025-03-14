import { Title1 } from "../../atomos/textos/titles/level1";
import InputPassword from "../../atomos/form/InputPassword";
import InputFiled from "../../atomos/form/Input";
import { loginValidationSchema } from "../../../../../utils/validations/loginValidationSchema";
import { Field, Formik } from "formik";
import { LoginUseCase } from "../../../../../domain/useCase/LoginUseCase";
import { useNavigate } from "react-router-dom";
import ButtonAtom from "../../atomos/ButtonAtom";


export default function LoginForm(): JSX.Element {
  const initialValues = {
    username: "",
    password: "",
  };

  const loginUseCase = new LoginUseCase();
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Title1 clasname="mb-16 text-center" titulo="Iniciar sesión" />
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          //const result = await handleLoginValidation(values);
          const newUser = await loginUseCase.execute(
            values.username,
            values.password
          );
          if (newUser.user.has_changed_password === 1) {
            navigate("/Nueva/Contraseña");
          } else {
            navigate("/clientes");
          }
          // if (result.error) {
          //   setErrors({ username: result.message, password: result.message });
          // }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, values, handleSubmit }) => (
          <form
            className="space-y-4 items-center justify-center"
            onSubmit={handleSubmit}
          >
            <div className=" mb-12 justify-center items-center">
              <Field
                nombre="username"
                label="Usuario"
                component={InputFiled}
                className="w-9/12 mx-auto mb-2"
              />
            </div>
            <div className="">
              <Field
                nombre="password"
                label="Contraseña"
                component={InputPassword}
                className="w-9/12 mx-auto mb-2"
              />
            </div>

            <div className="w-9/12 mx-auto text-end">
              <a
                href="/Olvide/Contraseña"
                className="text-semantic-informacion text-sm underline mt-2"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="">
              <ButtonAtom
                texto="Iniciar sesión"
                text="white text-lg"
                className="w-9/12 ml-16 mt-2"
                disabled={
                  isSubmitting ||
                  !isValid ||
                  !values.username ||
                  !values.password
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
