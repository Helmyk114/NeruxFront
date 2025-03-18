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
}

export default function InputPassword({
  nombre,
  label,
  isRequired,
  className,
}: InputPasswordProps): JSX.Element {
  const [isVisible, setIsVisible] = React.useState(false);
  const [field, meta] = useField(nombre);

  const toggleVisibility = () => setIsVisible(!isVisible);
  //const errorMessages = meta.error ? meta.error.split(", ") : [];
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
        isRequired={isRequired}
        className={className}
        label={label}
        type={isVisible ? "text" : "password"}
        variant="bordered"
        labelPlacement="outside"
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
      {meta.touched && meta.error ? (
        <TextError error={meta.error} classname={className} />
      ) : null}
    </>
  );
}
