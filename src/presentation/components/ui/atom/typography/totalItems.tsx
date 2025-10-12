interface TotalItemsProps {
  valor: number;
  texto: string;
}
export function TotalItems({ valor, texto }: TotalItemsProps): JSX.Element {
  return (
    <p className="text-typography-thrith text-sm font-light">
      Total {valor} {texto}
    </p>
  );
}
