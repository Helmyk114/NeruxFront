import { Select, SelectItem } from "@heroui/react";
import { useField } from "formik";
import { TextError } from "../textos/textError";

interface Option {
  key: string | number;
  label: string;
}

interface SelectAtomProps {
  label?: string;
  nombre: string;
  options: Option[];
  isRequired?: boolean;
}

export function SelectAtom({
  label,
  nombre,
  options,
  isRequired,
}: SelectAtomProps): JSX.Element {
  const [field, meta, helpers] = useField(nombre);
  const hasError = meta.touched && meta.error;

  if( !options || options.length === 0) {
    return (
      <div className="flex flex-col w-full">
        <Select
          {...field}
          classNames={{
            label: ["font-OpenSans", "focus:text-texts-level1"],
            trigger: [
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
            ],
            errorMessage: ["hidden"],
          }}
          label={label}
          variant="faded"
          isRequired={isRequired}
          isInvalid={false}
          labelPlacement="outside"
        >
          <SelectItem key="no-options">No options available</SelectItem>
        </Select>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <Select
        {...field}
        classNames={{
          label: ["font-OpenSans", "focus:text-texts-level1"],
          trigger: [
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
        label={label}
        variant="faded"
        isRequired={isRequired}
        isInvalid={false}
        labelPlacement="outside"
        selectedKeys={field.value ? [field.value] : []}
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as string;
          helpers.setTouched(true);
          helpers.setValue(selectedKey);  
        }}
      >
        {options.map((option) => (
          <SelectItem key={option.key}>{option.label}</SelectItem>
        ))}
      </Select>
      {hasError && typeof meta.error === "string" ? (
        <TextError error={meta.error} />
      ) : null}
    </div>
  );
}
