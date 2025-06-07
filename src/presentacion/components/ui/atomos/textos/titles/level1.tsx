interface Title1Props {
  titulo: string;
  clasname?: string;
}

export function Title1({ titulo, clasname }: Title1Props): JSX.Element {
  return (
    <h1
      className={`text-2xl font-bold dark:text-typography-first font-OpenSans ${clasname}`}
    >
      {titulo}
    </h1>
  );
}
