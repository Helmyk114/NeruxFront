import {Input} from "@heroui/react";
import { IconUser } from "@tabler/icons-react";
import { useField } from "formik";
import { useState } from "react";

interface InputFieldProps {
  label: string;
  nombre: string;
  className: string;
  
}

export default function InputFiled({ label, nombre, className}: InputFieldProps): JSX.Element {
  const [field, meta] = useField(nombre);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
    <Input
      {...field}
      className={className}
      endContent={
      <IconUser className="text-2xl text-default-400 pointer-events-none"/>
      }
      label={label}
      variant="bordered"
      labelPlacement="outside"
      classNames={{
        inputWrapper: "dark:focus-within:border-purpleStart ",
        
      }}
      
    
    />
      {meta.touched && meta.error ? (
      <div className="flex text-error ml-10">
        {<IconUser/>}
        <span className=" font-OpenSans text-xs text-red-500 text-center ml-2">{meta.error}</span>
        
      </div>
    ) : null}
    
    </>
  );
}

