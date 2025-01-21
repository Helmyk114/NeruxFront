import {Input} from "@nextui-org/react";
import { IconError404, IconUser } from "@tabler/icons-react";
import { useField } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  className: string;
}

export default function InputFiled({ label, name, className }: InputFieldProps): JSX.Element {
  const [field, meta] = useField(name);
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
    />
    
    {meta.touched && meta.error ? (
      <div className="flex text-error ml-1 mt-1">
        {<IconError404 />}
        <span className="ml-2 font-OpenSans text-xs">{meta.error}</span>
        
      </div>
    ) : null}
    </>
  );
}

