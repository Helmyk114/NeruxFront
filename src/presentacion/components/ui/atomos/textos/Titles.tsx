/*
 * Configuración de componentes de título reutilizables con estilos predefinidos.
 *
 * - PageTitle: Títulos grandes (24px, bold). Color: typography.first.
 * - Subtitle: Subtítulos (16px, regular). Color: typography.second.
 * - DrawerTitle: Títulos para Drawers o Modales (20px, semibold). Color: typography.first.
 * - TableHeader: Encabezados para tablas (16px, bold). Color: typography.first.
 * - InputTitle: Etiquetas para campos de formulario (14px, semibold). Color: typography.first.
 *
 */
interface TitleProps {
  titulo: string;
  className?: string;
}

export const Title = {
  PageTitle: ({ titulo, className }: TitleProps) => {
    return (
      <h1
        className={`font-OpenSans text-2xl font-bold text-typography-first capitalize ${
          className || ""
        }`}
      >
        {titulo}
      </h1>
    );
  },
  Subtitle: ({ titulo, className }: TitleProps) => {
    return (
      <h2
        className={`font-OpenSans text-base font-normal text-typography-second capitalize ${
          className || ""
        }`}
      >
        {titulo}
      </h2>
    );
  },
  DrawerTitle: ({ titulo, className }: TitleProps) => {
    return (
      <h3
        className={`font-OpenSans text-xl font-semibold text-typography-first capitalize ${
          className || ""
        }`}
      >
        {titulo}
      </h3>
    );
  },
  TableHeader: ({ titulo, className }: TitleProps) => {
    return (
      <h4
        className={`font-OpenSans text-base font-bold text-typography-first capitalize ${
          className || ""
        }`}
      >
        {titulo}
      </h4>
    );
  },
  InputTitle: ({ titulo, className }: TitleProps) => {
    return (
      <h5
        className={`font-OpenSans text-sm font-semibold text-typography-first capitalize ${
          className || ""
        }`}
      >
        {titulo}
      </h5>
    );
  },
};
