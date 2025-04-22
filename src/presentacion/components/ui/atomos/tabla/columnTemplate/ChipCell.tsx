import ChipAtom from "../../Chip";

interface ChipCellProps {
  texto: string;
  colorText: string;
  colorDot: string;
}

export function ChipCell({ colorText, colorDot, texto }: ChipCellProps): JSX.Element {
  return <ChipAtom colorText={colorText} colorDot={colorDot} texto={texto} />;
}
