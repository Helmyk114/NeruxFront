import { Input } from "@heroui/react";
import { IconUser } from "@tabler/icons-react";
import { useField } from "formik";
import { TextError } from "../textos/textError";

interface InputFieldProps {
  label: string;
  nombre: string;
  isRequired?: true | false;
  type?: "text" | "email" | "number";
  className?: string;
}

export default function InputFiled({
  label,
  nombre,
  isRequired,
  type = "text",
  className,
}: InputFieldProps): JSX.Element {
  const [field, meta] = useField(nombre);
  const hasError = meta.touched && meta.error;

  return (
    <>
      <Input
        {...field}
        classNames={{
          label: ["font-OpenSans"],
          inputWrapper: [
            "dark:focus-within:border-purpleStart",
            "dark:hover:border-purpleStart",
            hasError
            ? "dark:!border-semantic-error dark:hover:!border-semantic-error dark:focus-within:!border-semantic-error"
            : "!hover:border-purpleStart !focus:border-purpleStart",
          ],
          errorMessage: ["hidden"],
          
        }}
        className={className}
        label={label}
        isRequired={isRequired}
        variant="bordered"
        labelPlacement="outside"
        type={type}
        isInvalid={false}
        endContent={
          <IconUser className="text-2xl text-default-400 pointer-events-none" />
        }
      />
      {hasError? (
        <TextError error={meta.error as string} classname={className} />
      ) : null}
    </>
  );
}
