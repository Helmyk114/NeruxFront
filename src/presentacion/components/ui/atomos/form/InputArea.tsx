import { Textarea } from "@heroui/react";
import { useField } from "formik";
import { TextError } from "../textos/textError";

interface InputTextAreaProps {
  nombre: string;
  label: string;
  isRequired?: boolean;
  placeholder?: string;
  maxLength?: number;
  className?: string;
}

export default function InputTextArea({
  nombre,
  className,
  label,
  isRequired,
  placeholder,
  maxLength,
}: InputTextAreaProps): JSX.Element {
  const [field, meta] = useField(nombre);
  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col w-full">
      <Textarea
        {...field}
        classNames={{
          label: ["font-OpenSans focus:text-texts-level1"],
          inputWrapper: [
            "dark:focus-within:border-button-active",
            "dark:hover:border-button-active",
            "dark:border-base-fourth",
            "dark:bg-base-thrith",
            hasError
              ? "dark:!border-semantic-error dark:hover:!border-semantic-error dark:focus-within:!border-semantic-error"
              : "!hover:border-button-active !focus:border-button-active",
          ],
          errorMessage: ["hidden"],
        }}
        className={className}
        label={label}
        placeholder={placeholder}
        isRequired={isRequired}
        maxLength={maxLength}
        variant="bordered"
        labelPlacement="outside"
        isInvalid={false}
      />
      {hasError && typeof meta.error === "string" ? (
        <TextError error={meta.error} classname={className} />
      ) : null}
    </div>
  );
}
