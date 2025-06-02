interface Title3Props {
  titulo: string;
  clasname?: string;
}

export function Title3({ titulo, clasname }: Title3Props): JSX.Element {
  return (
    <h1
      className={`whitespace-pre-line text-xl font-bold font-OpenSans dark:text-texts-level1 ${clasname}`}
    >
      {titulo}
    </h1>
  );
}
