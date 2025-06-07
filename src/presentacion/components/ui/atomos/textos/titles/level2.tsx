interface Title1Props {
  titulo: string;
  clasname?: string;
  color?: string;
}

export function Title2({ titulo, clasname }: Title1Props): JSX.Element {
  return (
    <h1 className={`whitespace-pre-line text-base font-normal font-OpenSans dark:text-typography-second ${clasname}`}>
      {titulo}
    </h1>
  );
}
