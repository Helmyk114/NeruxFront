interface Title1Props {
  titulo: string;
  clasname?: string;
}

export function Title1({ titulo, clasname }: Title1Props): JSX.Element {
  return (
    <h1 className={`text-3xl font-bold font-OpenSans ${clasname}`}>
      {titulo}
    </h1>
  );
}
