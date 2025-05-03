import { Input } from "@heroui/react";
import { useField } from "formik";
import { TextError } from "../textos/textError";

interface InputNumberProps {
  label: string;
  nombre: string;
  isRequired?: boolean;
  className?: string;
}

export default function NumberInput({
  label,
  nombre,
  isRequired,
  className,
}: InputNumberProps): JSX.Element {
  const [field, meta, helpers] = useField(nombre); // Usamos helpers.setValue
  const hasError = meta.touched && meta.error;

  const formatNumber = (numStr: string) => {
    if (!numStr) return "";
    const cleanNumStr = numStr.replace(/\./g, "");
    return cleanNumStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleValueChange = (value: string) => {
    // Eliminar todos los caracteres no numéricos
    const numericString = value.replace(/[^\d]/g, "");
    
    // Actualizar el valor de Formik (sin puntos)
    helpers.setValue(numericString ? Number(numericString) : null);
    
    // Actualizar el valor visual (con puntos)
    helpers.setTouched(true);
    return formatNumber(numericString);
  };

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
          input: "text-right",
        }}
        className={className}
        label={label}
        isRequired={isRequired}
        value={formatNumber(field.value?.toString() || "")} // Mostrar con puntos
        onValueChange={handleValueChange}
        variant="bordered"
        labelPlacement="outside"
        isInvalid={false}
      />
      {hasError && <TextError error={meta.error as string} classname={className} />}
    </>
  );
}