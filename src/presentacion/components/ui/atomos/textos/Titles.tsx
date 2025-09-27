interface TitleProps {
  titulo: string;
  className: string;
}

export const Title = {
  T1: ({ titulo, className }: TitleProps) => {
    return <h1 className={className}>{titulo}</h1>;
  },
  T2: ({ titulo, className }: TitleProps) => {
    return <h2 className={className}>{titulo}</h2>;
  },
  T3: ({ titulo, className }: TitleProps) => {
    return <h3 className={className}>{titulo}</h3>;
  },
  T4: ({ titulo, className }: TitleProps) => {
    return <h4 className={className}>{titulo}</h4>;
  },
  T5: ({ titulo, className }: TitleProps) => {
    return <h5 className={className}>{titulo}</h5>;
  },
};
