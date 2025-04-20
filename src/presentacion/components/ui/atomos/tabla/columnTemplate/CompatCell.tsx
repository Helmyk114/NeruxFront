interface CompactCellProps {
  textTop: string;
  textBotton: string;
}
export function CompactCell({
  textTop,
  textBotton,
}: CompactCellProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <p className="text-bold text-small capitalize">{textTop}</p>
      <p className="text-bold text-tiny capitalize text-default-400">
        {textBotton}
      </p>
    </div>
  );
}
