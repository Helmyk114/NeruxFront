import { ItemsByPage } from "../../atomos/tabla/itemsByPage";
import { TotalItems } from "../../atomos/tabla/totalItems";

interface TopContentPorps {
  totalItems: number;
  texto: string;
  handleRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function TopContent({
  totalItems,
  texto,
  handleRowsPerPageChange,
}: TopContentPorps): JSX.Element {
  return (
    <>
      <TotalItems valor={totalItems} texto={texto} />
      <ItemsByPage onRowsPerPageChange={handleRowsPerPageChange} />
    </>
  );
}
