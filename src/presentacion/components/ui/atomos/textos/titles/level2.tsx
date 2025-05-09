interface Title1Props {
  titulo: string;
  clasname?: string;
  color?: string;
}

export function Title2({ titulo, clasname, color="text-texts-level2" }: Title1Props): JSX.Element {
  return (
    <h1 className={`whitespace-pre-line text-lg font-normal font-OpenSans ${color}  ${clasname}`}>
      {titulo}
    </h1>
  );
}
