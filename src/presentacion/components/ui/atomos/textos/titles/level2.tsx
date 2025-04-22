interface Title1Props {
  titulo: string;
  clasname?: string;
}

export function Title2({ titulo, clasname }: Title1Props): JSX.Element {
  return (
    <h1 className={`text-lg font-normal text-texts-level2 font-OpenSans ${clasname}`}>
      {titulo}
    </h1>
  );
}
