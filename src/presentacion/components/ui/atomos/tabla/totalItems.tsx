interface TotalItemsProps {
  valor: number;
  texto: string;
}
export function TotalItems({ valor, texto }: TotalItemsProps): JSX.Element {
  return (
    <p className="text-textInput text-sm font-normal">
      Total {valor} {texto}
    </p>
  );
}
