interface TextoInicioProps {
  spans: SpanItem[];
  className?: string;
}

interface SpanItem {
  texto?: string;
  className?: string;
}

export function TextoInicio({
  spans,
  className,
}: TextoInicioProps): JSX.Element {
  return (
    <div className={className}>
      {spans.map((span, index) => (
        <span key={index} className={span.className}>
          {span.texto}
        </span>
      ))}
    </div>
  );
}
