import { NumberInput } from "@heroui/react";
import { useField } from "formik";
import { TextError } from "../textos/textError";

interface InputNumberProps {
  label: string;
  nombre: string;
  isRequired?: boolean;
  className?: string;
}

export function InputNumber({
  label,
  nombre,
  isRequired,
  className,
}: InputNumberProps): JSX.Element {
  const [field, meta] = useField(nombre);
  const hasError = meta.touched && meta.error;

  return (
    <div className="flex flex-col w-full">
      <NumberInput
        {...field}
        classNames={{
          label: ["font-OpenSans"],
          inputWrapper: [
            "!text-texts-level1",
            "dark:!text-texts-level1", 
            "focus-within:!border-button-active",
            "dark:focus-within:border-button-active",
            "hover:!border-button-active",
            "dark:hover:border-button-active",
            "dark:border-base-fourth",
            "border-base-fourth",
            "dark:bg-base-thrith",
            "bg-base-thrith",
            hasError
              ? "!border-semantic-error hover:!border-semantic-error focus-within:!border-semantic-error"
              : "dark:hover:!border-button-active dark:focus:!border-button-active",
          ],
          errorMessage: ["hidden"],
        }}
        className={className}
        label={label}
        isRequired={isRequired}
        variant="bordered"
        labelPlacement="outside"
        placeholder=""
        isInvalid={false}
        hideStepper
      />
      {hasError && (
        <TextError error={meta.error as string} classname={className} />
      )}
    </div>
  );
}
