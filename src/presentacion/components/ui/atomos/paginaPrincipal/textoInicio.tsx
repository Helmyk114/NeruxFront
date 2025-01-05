import React from "react";

interface TextoInicioProps {
  spans: SpanItem[];
  className?: string;
}
interface SpanItem {
  texto: string;
  className?: string;
}

export const TextoInicio: React.FC<TextoInicioProps> = ({
  spans,
  className,
}) => {
  return (
    <p className={className}>
      {spans.map((span, index) => (
        <span key={index} className={span.className}>
          {span.texto}
        </span>
      ))}
    </p>
  );
};
