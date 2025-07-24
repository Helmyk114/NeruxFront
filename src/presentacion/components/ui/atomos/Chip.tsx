import {Chip} from "@heroui/react";

interface ChipAtomProps {
  colorText: string;
  colorDot: string;
  texto: string;
}
export function ChipAtom({ colorText, colorDot, texto }: ChipAtomProps): JSX.Element {
  return (
    <Chip
      classNames={{
        base: `capitalize border-none gap-1 ${colorText}`,
        dot: `${colorDot}`,
      }}
      variant="dot"
    >
      {texto}
    </Chip>
  );
}
