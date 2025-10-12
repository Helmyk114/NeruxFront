import { Checkbox } from "@heroui/react";
import { useField } from "formik";

interface CheckAtomProps {
  nombre: string;
  texto: string;
}

export function CheckAtom({ nombre, texto }: CheckAtomProps): JSX.Element {
  const [field, , helpers] = useField<boolean>(nombre);

  return (
    <Checkbox
      name={field.name}
      isSelected={field.value}
      onValueChange={helpers.setValue}
    >
      {texto}
    </Checkbox>
  );
}
