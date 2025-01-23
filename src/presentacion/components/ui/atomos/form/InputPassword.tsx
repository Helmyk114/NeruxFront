import React from "react";
import {Input} from "@nextui-org/react";
import { IconError404, IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useField } from "formik";

interface InputPasswordProps{
  nombre: string;
  label: string;
  className: string;
  hasError?: boolean;
}

export default function InputPassword({ className, nombre, label, hasError }: InputPasswordProps): JSX.Element {
  const [isVisible, setIsVisible] = React.useState(false);
  const [field, meta] = useField(nombre);


  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
   
    <Input
    {...field}
      isRequired = {true}
      className={className}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <IconEyeClosed className="text-2xl text-default-400 pointer-events-none"/>
          ) : (
            <IconEye className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      
      label={label}
      type={isVisible ? "text" : "password"}
      variant="bordered"
      labelPlacement="outside"
      classNames={{
        inputWrapper: hasError ? "border-red-500 text-red-500" : "",
      }}
      
    />

   </>
  );
}

