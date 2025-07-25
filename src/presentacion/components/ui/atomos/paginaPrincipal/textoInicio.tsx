interface TextSegment {
  text?: string;
  className?: string;
}
interface RichTextoProps {
  segments: TextSegment[];
  className?: string;
}

export function RichText({
  segments,
  className = "",
}: RichTextoProps): JSX.Element | null {
  if (!segments || segments.length === 0) return null;

  return (
    <div className={className}>
      {segments.map(({ text = "", className: segmentClass = "" }) => (
        <span key={`${segmentClass}-${text}`} className={segmentClass}>
          {text}
        </span>
      ))}
    </div>
  );
}
