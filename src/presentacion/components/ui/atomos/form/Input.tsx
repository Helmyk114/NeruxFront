import { Input } from "@heroui/react";
import { IconUser } from "@tabler/icons-react";
import { useField } from "formik";
import { TextError } from "../textos/textError";

interface InputFieldProps {
  label: string;
  nombre: string;
  isRequired?: true | false;
  className?: string;
}

export default function InputFiled({
  label,
  nombre,
  isRequired,
  className,
}: InputFieldProps): JSX.Element {
  const [field, meta] = useField(nombre);

  return (
    <>
      <Input
        {...field}
        classNames={{
          label: ["font-OpenSans"],
          inputWrapper: [
            "dark:focus-within:border-purpleStart",
            "dark:hover:border-purpleStart",
          ],
          errorMessage: ["hidden"],
        }}
        className={className}
        label={label}
        isRequired={isRequired}
        variant="bordered"
        labelPlacement="outside"
        endContent={
          <IconUser className="text-2xl text-default-400 pointer-events-none" />
        }
      />
      {meta.touched && meta.error ? (
        <TextError error={meta.error} classname={className} />
      ) : null}
    </>
  );
}
