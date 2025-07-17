import { Field } from "formik";
import InputFiled from "../../atomos/form/Input";
import { IconUser } from "@tabler/icons-react";


export function OlvideContraseñaFormfields(): JSX.Element{
    return(
         <>
         <div>
            <Field
            nombre="email"
            label="Correo electrónico"
            component={InputFiled}
            isRequired={true}
            icono={<IconUser className="text-2xl text-default-400 pointer-events-none" />}
            className="w-3/5 mx-auto"
         />
         </div>
        
         </>
    )
}