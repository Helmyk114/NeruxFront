import React from "react";
import { Input } from "@heroui/react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useField } from "formik";
import { TextError } from "../textos/textError";

interface InputPasswordProps {
  nombre: string;
  label: string;
  isRequired?: true | false;
  className?: string;
  showError?: boolean;
}

export default function InputPassword({
  nombre,
  label,
  isRequired,
  className,
  showError = true,
}: InputPasswordProps): JSX.Element {
  const [isVisible, setIsVisible] = React.useState(false);
  const [field, meta] = useField(nombre);
  const hasError = meta.touched && meta.error;

  const toggleVisibility = () => setIsVisible(!isVisible);

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
        isRequired={isRequired}
        className={className}
        label={label}
        type={isVisible ? "text" : "password"}
        variant="bordered"
        labelPlacement="outside"
        isInvalid={false}
        endContent={
          <button
            aria-label="toggle password visibility"
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <IconEyeClosed className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <IconEye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
      />
      {showError && hasError ? (
        <TextError error={meta.error as string} classname={className} />
      ) : null}
    </>
  );
}
