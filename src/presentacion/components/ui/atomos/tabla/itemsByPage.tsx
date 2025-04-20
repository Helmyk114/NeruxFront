interface ItemsByPageProps {
  tabla: string;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function ItemsByPage({ tabla, onRowsPerPageChange}: ItemsByPageProps): JSX.Element {
  return (
    <label className="flex items-center text-textInput text-sm font-normal">
      {`${tabla} por página:`}
      <select
        className="bg-transparent outline-none text-textInput text-sm font-normal"
        onChange={onRowsPerPageChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </label>
  );
}
