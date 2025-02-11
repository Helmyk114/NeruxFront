import React from "react";
import {Input} from "@heroui/react";
import { IconCheck, IconError404, IconEye, IconEyeClosed, IconX } from "@tabler/icons-react";
import { useField} from 'formik';

interface InputPasswordProps{
  nombre: string;
  label: string;
  className: string;
  
}

export default function InputPassword({ className, nombre, label }: InputPasswordProps): JSX.Element {
  const [isVisible, setIsVisible] = React.useState(false);
  const [field, meta] = useField(nombre);


  const toggleVisibility = () => setIsVisible(!isVisible);
  const errorMessages = meta.error ? meta.error.split(", ") : [];
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
        inputWrapper:" dark:focus-within:border-purpleStart",
      }}
     
    />
       

   </>
  );
}

