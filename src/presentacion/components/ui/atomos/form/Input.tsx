import { Input } from "@heroui/react";
import { IconUser } from "@tabler/icons-react";
import { useField } from "formik";
import { TextError } from "../textos/textError";

interface InputFieldProps {
  label: string;
  nombre: string;
  isRequired?: true | false;
  placerholder?: string;
  type?: "text" | "email" | "number";
  className?: string;
  minLength?: number;
  maxLength?: number;
}

export default function InputFiled({
  label,
  nombre,
  isRequired,
  type = "text",
  className,
  minLength,
  maxLength,
  placerholder,
}: InputFieldProps): JSX.Element {
  const [field, meta] = useField(nombre);
  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col w-full">
      <Input
        {...field}
        classNames={{
          label: ["font-OpenSans", "focus:text-texts-level1"],
          inputWrapper: [
            "focus-within:!border-button-active",
            "hover:!border-button-active",
            "dark:focus-within:border-button-active",
            "dark:hover:border-button-active",
            "dark:border-base-fourth",
            "dark:bg-base-thrith",
            hasError
              ? "!border-semantic-error hover:!border-semantic-error focus-within:!border-semantic-error"
              : "dark:hover:!border-button-active dark:focus:!border-button-active",
          ],
          errorMessage: ["hidden"],
        }}
        className={className}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        label={label}
        isRequired={isRequired}
        placeholder={placerholder}
        variant="bordered"
        labelPlacement="outside"
        isInvalid={false}
        endContent={
          <IconUser className="text-2xl text-default-400 pointer-events-none" />
        }
      />
      {hasError && typeof meta.error === "string" ? (
        <TextError error={meta.error} classname={className} />
      ) : null}
    </div>
  );
}
