interface Title3Props {
  titulo: string;
  classname?: string;
}

export function Title3({ titulo, classname }: Title3Props): JSX.Element {
  return (
    <h1
      className={`whitespace-pre-line text-xl font-bold font-OpenSans dark:text-texts-level1 ${classname}`}
    >
      {titulo}
    </h1>
  );
}
