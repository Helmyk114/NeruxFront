interface ItemsByPageProps {
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function ItemsByPage({ onRowsPerPageChange}: ItemsByPageProps): JSX.Element {
  return (
    <label className="flex items-center text-default-400 text-small">
      Clientes por página:
      <select
        className="bg-transparent outline-none text-default-400 text-small"
        onChange={onRowsPerPageChange}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </label>
  );
}
