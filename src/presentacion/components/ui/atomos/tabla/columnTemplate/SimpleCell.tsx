interface CompactCellProps {
  textTop: string;
}
export function SimpleCell({
  textTop,
}: CompactCellProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <p className="text-bold text-small capitalize">{textTop}</p>
    </div>
  );
}
