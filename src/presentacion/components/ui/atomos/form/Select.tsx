import { Select, SelectItem } from "@heroui/react";
import { useField } from "formik";
import { TextError } from "../textos/textError";

const animals = [
  { key: "0", label: "Cat" },
  { key: "1", label: "Dog" },
  { key: "2", label: "Elephant" },
  { key: "3", label: "Lion" },
  { key: "4", label: "Tiger" },
  { key: "5", label: "Giraffe" },
  { key: "6", label: "Dolphin" },
  { key: "7", label: "Penguin" },
  { key: "8", label: "Zebra" },
  { key: "9", label: "Shark" },
  { key: "10", label: "Whale" },
  { key: "11", label: "Otter" },
  { key: "12", label: "Crocodile" },
];

interface SelectAtomProps {
  label?: string;
  nombre: string;
  isRequired?: boolean;
}

export function SelectAtom({
  label,
  nombre,
  isRequired,
}: SelectAtomProps): JSX.Element {
  const [field, meta, helpers] = useField(nombre);
  const hasError = meta.touched && meta.error;

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
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
      {hasError && typeof meta.error === "string" ? (
        <TextError error={meta.error} />
      ) : null}
    </div>
  );
}
