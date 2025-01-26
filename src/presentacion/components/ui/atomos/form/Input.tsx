import {Input} from "@heroui/react";
import { IconUser } from "@tabler/icons-react";
import { useField } from "formik";

interface InputFieldProps {
  label: string;
  nombre: string;
  className: string;
  hasError?: boolean; 
}

export default function InputFiled({ label, nombre, className, hasError }: InputFieldProps): JSX.Element {
  const [field, meta] = useField(nombre);
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
        inputWrapper: hasError ? "border-red-500 " : "",
      }}
    />
    
    </>
  );
}

